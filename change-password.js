const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const readline = require('readline');

const prisma = new PrismaClient();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

const hidePassword = (query) => new Promise((resolve) => {
  const stdin = process.stdin;
  const stdout = process.stdout;
  
  stdout.write(query);
  stdin.setRawMode(true);
  stdin.resume();
  stdin.setEncoding('utf8');
  
  let password = '';
  stdin.on('data', (char) => {
    char = char.toString();
    
    if (char === '\n' || char === '\r') {
      stdin.setRawMode(false);
      stdin.pause();
      stdout.write('\n');
      resolve(password);
    } else if (char === '\u0003') {
      // Ctrl+C
      process.exit();
    } else if (char === '\u007f' || char === '\b') {
      // Backspace
      if (password.length > 0) {
        password = password.slice(0, -1);
        stdout.clearLine();
        stdout.cursorTo(0);
        stdout.write(query + '*'.repeat(password.length));
      }
    } else {
      password += char;
      stdout.write('*');
    }
  });
});

async function changePassword() {
  try {
    console.log('🔐 Change Password\n');
    
    const email = await question('Enter your email: ');
    
    // Find user
    const user = await prisma.user.findUnique({
      where: { email: email }
    });
    
    if (!user) {
      console.log('❌ No user found with that email!');
      return;
    }
    
    const currentPassword = await hidePassword('Enter current password: ');
    
    // Verify current password
    const isValid = await bcrypt.compare(currentPassword, user.hashedPassword);
    
    if (!isValid) {
      console.log('❌ Current password is incorrect!');
      return;
    }
    
    const newPassword = await hidePassword('Enter new password: ');
    const confirmPassword = await hidePassword('Confirm new password: ');
    
    if (newPassword !== confirmPassword) {
      console.log('❌ Passwords do not match!');
      return;
    }
    
    if (newPassword.length < 6) {
      console.log('❌ Password must be at least 6 characters long!');
      return;
    }
    
    // Hash and update password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    
    await prisma.user.update({
      where: { id: user.id },
      data: {
        hashedPassword: hashedPassword,
        updatedAt: new Date()
      }
    });
    
    console.log('✅ Password changed successfully!');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    rl.close();
    await prisma.$disconnect();
  }
}

changePassword();



export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              const theme = localStorage.getItem('theme');
              // Only remove dark class if explicitly set to light
              if (theme === 'light') {
                document.documentElement.classList.remove('dark');
              } else {
                // Default to dark for any other case
                document.documentElement.classList.add('dark');
                // Set localStorage to dark if not set
                if (!theme) {
                  localStorage.setItem('theme', 'dark');
                }
              }
            } catch (e) {
              // If localStorage fails, ensure dark theme
              document.documentElement.classList.add('dark');
            }
          })();
        `,
      }}
    />
  );
}

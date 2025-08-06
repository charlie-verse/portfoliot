'use client';

import React, { useEffect } from 'react';
import { X, Download } from 'lucide-react';
import { bricolage_grotesque, inter } from '@/utils/fonts';
import { motion, AnimatePresence } from 'framer-motion';
import { parseHighlightedText } from '@/utils/parseHighlightedText';

interface ResumeDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeDialog: React.FC<ResumeDialogProps> = ({ isOpen, onClose }) => {
  // Handle body overflow when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Fardeen_Mansoori_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resumeData = {
    name: "Fardeen Mansoori",
    title: "Full Stack Developer",
    // email: "fardeenmansoori26@gmail.com",
    // phone: "+91 9876543210",
    // linkedin: "linkedin.com/in/fardeenmansoori",
    // github: "github.com/Fardeen26",
    summary: "Passionate *Full Stack Developer* with expertise in building *scalable web applications*. Experienced in *React*, *Node.js*, and *cloud technologies*. Proven track record of delivering high-quality software solutions and leading cross-functional teams to achieve project goals.",
    experience: [
      {
        title: "Add-On Developer",
        company: "Adobe",
        period: "2024 - 2025",
        bullets: [
          "Developed and maintained Adobe Creative Cloud add-ons using *CEP* and *UXP* frameworks",
          "Collaborated with design teams to implement *user-friendly interfaces* for Photoshop and Illustrator extensions",
          "Optimized plugin performance resulting in *40% faster load times* and improved user experience for *10K+ users*"
        ]
      },
      {
        title: "Full Stack Developer",
        company: "Inagiffy",
        period: "2023 - 2024",
        bullets: [
          "Built and deployed scalable news aggregation platform using *Next.js*, *Node.js*, and *PostgreSQL*",
          "Implemented *real-time data processing* pipeline handling *100K+ articles daily* with Redis caching",
          "Led frontend development initiatives, improving site performance metrics by *35%* and *SEO rankings*"
        ]
      }
    ],
    education: {
      degree: "Bachelor of Computer Application",
      university: "University of Kota",
      year: "Expected July 2025",
      cgpa: "8.5/10"
    },
    skills: {
      languages: ["Python", "JavaScript", "TypeScript"],
      frontend: ["React", "Next.js", "Tailwind CSS"],
      backend: ["Node.js", "Express.js", "MongoDB", "MySQL"],
      devops: ["Git", "AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
      ai: ["HuggingFace", "LangChain", "RAG", "LLM", "AI Agents"]
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
            style={{ top: '-40px', height: 'calc(100% + 40px)' }}
          />
          
          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[101] flex items-start justify-center p-4 pt-20 overflow-y-auto"
          >
            <div className="bg-white dark:bg-black border dark:border-white/20 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b dark:border-white/20">
                <h2 className={`text-2xl font-semibold ${bricolage_grotesque}`}>Resume Preview</h2>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleDownload}
                    className="flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-80 transition-opacity"
                  >
                    <Download className="w-4 h-4" />
                    <span className={`text-sm ${inter}`}>Download PDF</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {/* Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-88px)] p-8">
                <div className="max-w-3xl mx-auto">
                  {/* Header Section */}
                  <div className="text-center mb-8">
                    <h1 className={`text-3xl font-bold mb-2 ${bricolage_grotesque}`}>{resumeData.name}</h1>
                    <p className={`text-xl text-gray-600 dark:text-gray-400 mb-4 ${inter}`}>{resumeData.title}</p>
                    <div className={`flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400 ${inter}`}>
                      {/* <span>{resumeData.email}</span> */}
                      {/* <span>•</span> */}
                      {/* <span>{resumeData.phone}</span> */}
                      {/* <span>•</span> */}
                    </div>
                    <div className={`flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400 mt-2 ${inter}`}>
                      {/* <span>{resumeData.linkedin}</span> */}
                      {/* <span>•</span> */}
                      {/* <span>{resumeData.github}</span> */}
                    </div>
                  </div>
                  
                  {/* Professional Summary */}
                  <div className="mb-8">
                    <h2 className={`text-xl font-semibold mb-3 ${bricolage_grotesque}`}>Professional Summary</h2>
                    <p className={`text-gray-600 dark:text-gray-400 leading-relaxed ${inter}`}>
                      {parseHighlightedText(resumeData.summary)}
                    </p>
                  </div>
                  
                  {/* Experience */}
                  <div className="mb-8">
                    <h2 className={`text-xl font-semibold mb-4 ${bricolage_grotesque}`}>Experience</h2>
                    {resumeData.experience.map((exp, idx) => (
                      <div key={idx} className="mb-6">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className={`text-lg font-semibold ${bricolage_grotesque}`}>{exp.title}</h3>
                            <p className={`text-gray-600 dark:text-gray-400 ${inter}`}>{exp.company}</p>
                          </div>
                          <span className={`text-sm text-gray-500 dark:text-gray-400 ${inter}`}>{exp.period}</span>
                        </div>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          {exp.bullets.map((bullet, bulletIdx) => (
                            <li key={bulletIdx} className={`text-gray-600 dark:text-gray-400 text-sm leading-relaxed ${inter}`}>
                              {parseHighlightedText(bullet)}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  
                  {/* Education */}
                  <div className="mb-8">
                    <h2 className={`text-xl font-semibold mb-3 ${bricolage_grotesque}`}>Education</h2>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className={`text-lg font-semibold ${bricolage_grotesque}`}>{resumeData.education.degree}</h3>
                        <p className={`text-gray-600 dark:text-gray-400 ${inter}`}>{resumeData.education.university}</p>
                        <p className={`text-sm text-gray-500 dark:text-gray-400 ${inter}`}>CGPA: {resumeData.education.cgpa}</p>
                      </div>
                      <span className={`text-sm text-gray-500 dark:text-gray-400 ${inter}`}>{resumeData.education.year}</span>
                    </div>
                  </div>
                  
                  {/* Skills */}
                  <div>
                    <h2 className={`text-xl font-semibold mb-4 ${bricolage_grotesque}`}>Skills</h2>
                    <div className="space-y-3">
                      <div>
                        <span className={`font-medium ${inter}`}>Languages:</span>
                        <span className={`text-gray-600 dark:text-gray-400 ml-2 ${inter}`}>
                          {resumeData.skills.languages.join(", ")}
                        </span>
                      </div>
                      <div>
                        <span className={`font-medium ${inter}`}>Frontend:</span>
                        <span className={`text-gray-600 dark:text-gray-400 ml-2 ${inter}`}>
                          {resumeData.skills.frontend.join(", ")}
                        </span>
                      </div>
                      <div>
                        <span className={`font-medium ${inter}`}>Backend:</span>
                        <span className={`text-gray-600 dark:text-gray-400 ml-2 ${inter}`}>
                          {resumeData.skills.backend.join(", ")}
                        </span>
                      </div>
                      <div>
                        <span className={`font-medium ${inter}`}>DevOps:</span>
                        <span className={`text-gray-600 dark:text-gray-400 ml-2 ${inter}`}>
                          {resumeData.skills.devops.join(", ")}
                        </span>
                      </div>
                      <div>
                        <span className={`font-medium ${inter}`}>AI/ML:</span>
                        <span className={`text-gray-600 dark:text-gray-400 ml-2 ${inter}`}>
                          {resumeData.skills.ai.join(", ")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResumeDialog;

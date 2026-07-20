/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/js/**/*.js"],
  darkMode: "class",
  theme: {
    container: { 
      center: true, 
      padding: "1.25rem" 
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "Roboto", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"],
      },
      colors: {
        alpha: {
          light: "rgba(255, 255, 255, 0.15)",
          dark: "rgba(0, 0, 0, 0.2)",
        },
        primary: {
          DEFAULT: "#6366F1", 
          color: "#FFFFFF",
          light: { 
            1: "#F8FAFF", 2: "#EEF2FF", 3: "#E0E7FF", 4: "#C7D2FE", 
            5: "#A5B4FC", 6: "#818CF8", 7: "#6366F1", 8: "#4F46E5", 
            9: "#4338CA", 10: "#3730A3", 11: "#312E81", 12: "#1E1B4B" 
          },
          dark: { 
            1: "#0B1020", 2: "#12172A", 3: "#1B2340", 4: "#253058", 
            5: "#2F3C71", 6: "#3D4B8E", 7: "#4F5EB2", 8: "#6366F1", 
            9: "#7C83FF", 10: "#A5B4FC", 11: "#C7D2FE", 12: "#EEF2FF" 
          }
        },
        secondary: {
          DEFAULT: "#334155", 
          color: "#FFFFFF",
          light: { 
            1: "#F8FAFC", 2: "#F1F5F9", 3: "#E2E8F0", 4: "#CBD5E1", 
            5: "#94A3B8", 6: "#818CF8", 7: "#6366F1", 8: "#334155", 
            9: "#1E293B", 10: "#172033", 11: "#121A29", 12: "#0F172A" 
          },
          dark: { 
            1: "#0F172A", 2: "#162033", 3: "#1E293B", 4: "#273449", 
            5: "#334155", 6: "#475569", 7: "#64748B", 8: "#94A3B8", 
            9: "#CBD5E1", 10: "#E2E8F0", 11: "#F1F5F9", 12: "#F8FAFC" 
          }
        },
        tertiary: {
          DEFAULT: "#14B8A6", 
          color: "#FFFFFF",
          light: { 
            1: "#F0FDFA", 2: "#CCFBF1", 3: "#99F6E4", 4: "#5EEAD4", 
            5: "#2DD4BF", 6: "#14B8A6", 7: "#0D9488", 8: "#0F766E", 
            9: "#115E59", 10: "#134E4A", 11: "#042F2E", 12: "#022C22" 
          },
          dark: { 
            1: "#042F2E", 2: "#083344", 3: "#0F3C3A", 4: "#115E59", 
            5: "#0F766E", 6: "#0D9488", 7: "#14B8A6", 8: "#2DD4BF", 
            9: "#5EEAD4", 10: "#99F6E4", 11: "#CCFBF1", 12: "#F0FDFA" 
          }
        },
        accent: {
          DEFAULT: "#F59E0B", 
          color: "#111827",
          light: { 
            1: "#FFFBEB", 2: "#FEF3C7", 3: "#FDE68A", 4: "#FCD34D", 
            5: "#FBBF24", 6: "#F59E0B", 7: "#D97706", 8: "#B45309", 
            9: "#92400E", 10: "#78350F", 11: "#451A03", 12: "#2A1401" 
          },
          dark: { 
            1: "#2A1401", 2: "#451A03", 3: "#78350F", 4: "#92400E", 
            5: "#B45309", 6: "#D97706", 7: "#F59E0B", 8: "#FBBF24", 
            9: "#FCD34D", 10: "#FDE68A", 11: "#FEF3C7", 12: "#FFFBEB" 
          }
        },
        body: {
          light: { 
            1: "#FFFFFF", 2: "#FAFBFC", 3: "#F5F7FA", 4: "#E8EDF3", 
            5: "#D6DEE8", 6: "#94A3B8", 7: "#64748B", 8: "#475569", 
            9: "#334155", 10: "#293548", 11: "#1E293B", 12: "#172033" 
          },
          dark: { 
            1: "#111827", 2: "#162033", 3: "#1E293B", 4: "#273449", 
            5: "#334155", 6: "#475569", 7: "#64748B", 8: "#94A3B8", 
            9: "#CBD5E1", 10: "#E2E8F0", 11: "#F1F5F9", 12: "#FFFFFF" 
          }
        }
      },
      boxShadow: {
        "card-1": "0 8px 32px rgba(15,23,42,.08)",
        "card-2": "0 12px 24px rgba(15,23,42,.12)"
      }
    }
  },
  plugins: [],
}
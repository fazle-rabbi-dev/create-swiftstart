# Install all dependencies
npm install next@13.5.6 react react-dom @tanstack/react-query react-hot-toast react-spinners react-hook-form yup @hookform/resolvers axios zustand

sleep 1
clear

npm install -D eruda tailwindcss postcss autoprefixer
clear
echo -e "\033[1;93m [*] Starting dev server .."
npm run dev && rm install.sh 
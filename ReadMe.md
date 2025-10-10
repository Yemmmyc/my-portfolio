# 🧑‍💼 Oluwayemisi Olabanji Okunrounmu — 🌐 My Portfolio CV Website

Welcome to my personal portfolio!  
🚀 **Deployed automatically via GitHub Actions to Azure Static Web Apps**

This project showcases my personal portfolio — a simple and responsive website hosted on **Azure Static Web Apps** with **continuous deployment (CI/CD)** directly from GitHub.  
Every time a change is pushed to the main branch, the site is automatically rebuilt and redeployed to Azure.

[🔗 GitHub Repository](https://github.com/Yemmmyc/my-portfolio) • [🌍 Live Portfolio](https://ashy-cliff-0b25d7a10.2.azurestaticapps.net/) • [💼 LinkedIn](#)

---

## 🧭 About

This is a personal portfolio website created to highlight my journey as an IT professional.  
I am an **IT Technical Support specialist** with a proven ability to align technology with business strategy and deliver scalable, secure solutions.

The portfolio serves as a central hub where visitors can:

- Learn more about me  
- View my technical skills  
- Explore my featured projects  
- Connect with me directly  

---

## ✨ Features

✅ **Fully Responsive Design** – Works seamlessly across devices  
🎨 **Modern Oxblood Theme** – Professional look with consistent styling  
🧱 **Card-Based Layout** – Clean presentation of projects and sections  
🧭 **Smooth Navigation** – Quick access to all sections of the site  
☁️ **Azure-Hosted** – Deployed via GitHub Actions on Azure Static Web Apps  

---

## 🛠️ Technologies Used

- **HTML5** – Structure and content  
- **CSS3** – Styling and layout  
- **JavaScript** – Interactivity and smooth scrolling  
- **GitHub & Azure** – Hosting and CI/CD deployment  

---

## 🧩 Tools Used

- 🧑‍💻 **Visual Studio Code** — Development and deployment  
- ☁️ **Azure Static Web Apps (VS Code extension)** — Deploy directly from VS Code  
- 🌐 **Azure Portal** — Manage Static Web App and view deployment history  
- 🔁 **Git & GitHub** — Version control and remote hosting  
- ⚙️ **GitHub Actions** — CI/CD automation for continuous deployment  
- 💻 **PowerShell / Terminal** — Running local git commands  
- 🧭 **Chrome / Edge / Firefox** — Browser testing and debugging  
- 🪣 **(Optional) Azure CLI** — Manual Azure operations  

---

## 🗂 Project Structure

my-portfolio/
├── index.html # Main HTML file
├── styles.css # Custom CSS for styling
├── assets/ # (Optional) images, icons, media
├── .github/
│ └── workflows/ # GitHub Actions for Azure
└── README.md # Documentation


---

## 🚀 How to Run Locally

Follow these steps to view the project locally:

```bash
# Clone the repository
git clone https://github.com/Yemmmyc/my-portfolio.git

# Navigate into the folder
cd my-portfolio

# Open in your browser
start index.html     # Windows
open index.html      # macOS
xdg-open index.html  # Linux

☁️ Azure Static Web App Deployment (VS Code Method)

This section documents how the portfolio was deployed from VS Code to Azure Static Web Apps using GitHub Actions.

🪴 Step 1 — Setup

Open your project in VS Code

Install the Azure Static Web Apps extension

Sign in to your Azure account

Click the Azure icon → Static Web Apps → + Create Static Web App

⚙️ Step 2 — Configuration
Setting	Value
App Name	my-portfolio
Framework	Custom
App location	/
API location	(leave blank)
Output location	/

Azure automatically generates a workflow file:
.github/workflows/azure-static-web-apps.yml

🔁 Step 3 — Automatic CI/CD Deployment

Every time you push to the main branch, Azure automatically builds and redeploys your site.

Monitor deployment logs in:

GitHub → Actions tab

Azure Portal → Deployments

🎨 CSS Not Applying? (Quick Fix)

If your page loads but the styles don’t apply:

Check your HTML link reference:

<link rel="stylesheet" href="styles.css">

git add .
git commit -m "Fix CSS path"
git push

🌍 Live Deployment

✅ Azure URL:
https://ashy-cliff-0b25d7a10.2.azurestaticapps.net/

✅ GitHub Repository:
https://github.com/Yemmmyc/my-portfolio

👤 Author

Oluwayemisi Olabanji Okunrounmu
IT Technical Support | Cloud & DevOps Enthusiast

📧 Email: yemmmyc@hotmail.com

📞 Phone: 08034737155

📝 License

This project is open-source and available under the MIT License.

⭐️ If you like this project, don’t forget to star the repository!
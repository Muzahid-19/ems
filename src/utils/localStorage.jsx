const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "employee1@gmail.com",
    password: "123",
    tasks: [
      {
        title: "Build Login Page",
        description: "Implement login functionality with form validation",
        date: "2025-08-10",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve dropdown menu not working in mobile view",
        date: "2025-08-12",
        category: "Bug Fix",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Write API Documentation",
        description: "Document all endpoints for the user module",
        date: "2025-08-15",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@gmail.com",
    password: "123",
    tasks: [
      {
        title: "Create Landing Page",
        description: "Design and develop the homepage layout",
        date: "2025-08-11",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Optimize Images",
        description: "Reduce image size without losing quality",
        date: "2025-08-13",
        category: "Optimization",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Setup Testing Framework",
        description: "Integrate Jest for unit testing",
        date: "2025-08-14",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Fix Footer Layout",
        description: "Correct alignment issues in footer section",
        date: "2025-08-16",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 3,
    firstName: "Rajesh",
    email: "employee3@gmail.com",
    password: "123",
    tasks: [
      {
        title: "Database Backup",
        description: "Perform full backup of project database",
        date: "2025-08-10",
        category: "Maintenance",
        active: false,
        newTask: true,
        completed: true,
        failed: false
      },
      {
        title: "Update README",
        description: "Add project setup instructions",
        date: "2025-08-11",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Add Search Feature",
        description: "Implement search bar for product list",
        date: "2025-08-13",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Pagination Bug",
        description: "Correct page number issue in user list",
        date: "2025-08-15",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskNumbers: {
      active: 1,
      newTask: 2,
      completed: 2,
      failed: 1
    }
  },
  {
    id: 4,
    firstName: "Neha",
    email: "employee4@gmail.com",
    password: "123",
    tasks: [
      {
        title: "Create Test Cases",
        description: "Write test cases for payment module",
        date: "2025-08-10",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update Dependencies",
        description: "Upgrade packages to latest versions",
        date: "2025-08-11",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Implement Dark Mode",
        description: "Add dark mode theme to the app",
        date: "2025-08-13",
        category: "UI/UX",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 5,
    firstName: "Anjali",
    email: "employee5@gmail.com",
    password: "123",
    tasks: [
      {
        title: "SEO Optimization",
        description: "Improve search engine ranking",
        date: "2025-08-12",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Image Slider",
        description: "Correct auto-slide timing issue",
        date: "2025-08-13",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Create Blog Post",
        description: "Write article about new product launch",
        date: "2025-08-14",
        category: "Content",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update Privacy Policy",
        description: "Revise policy as per new compliance rules",
        date: "2025-08-15",
        category: "Legal",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  }
];


const admin = [
  {
    id: 1,
    email: "admin@me.com.com",
    password: "123"
  }
];

export const setLocalStorage = () => {

  localStorage.setItem("employees",JSON.stringify(employees))
  localStorage.setItem("admin",JSON.stringify(admin))

}

export const getLocalStorage = () => {

  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return{employees,admin}
}



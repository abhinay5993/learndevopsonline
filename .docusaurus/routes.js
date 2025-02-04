import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/learndevopsonline/build/blog',
    component: ComponentCreator('/learndevopsonline/build/blog', 'b0d'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/blog/archive',
    component: ComponentCreator('/learndevopsonline/build/blog/archive', '84b'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/blog/first-blog-post',
    component: ComponentCreator('/learndevopsonline/build/blog/first-blog-post', 'd88'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/blog/long-blog-post',
    component: ComponentCreator('/learndevopsonline/build/blog/long-blog-post', '4d0'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/blog/mdx-blog-post',
    component: ComponentCreator('/learndevopsonline/build/blog/mdx-blog-post', '169'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/blog/tags',
    component: ComponentCreator('/learndevopsonline/build/blog/tags', 'c20'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/blog/tags/docusaurus',
    component: ComponentCreator('/learndevopsonline/build/blog/tags/docusaurus', '222'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/blog/tags/facebook',
    component: ComponentCreator('/learndevopsonline/build/blog/tags/facebook', '1a6'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/blog/tags/hello',
    component: ComponentCreator('/learndevopsonline/build/blog/tags/hello', 'e70'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/blog/tags/hola',
    component: ComponentCreator('/learndevopsonline/build/blog/tags/hola', '760'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/blog/welcome',
    component: ComponentCreator('/learndevopsonline/build/blog/welcome', '5da'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/markdown-page',
    component: ComponentCreator('/learndevopsonline/build/markdown-page', '2b7'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/docs',
    component: ComponentCreator('/learndevopsonline/build/docs', '4ba'),
    routes: [
      {
        path: '/learndevopsonline/build/docs/bonus-videos/aws-cloud9-service-as-editor',
        component: ComponentCreator('/learndevopsonline/build/docs/bonus-videos/aws-cloud9-service-as-editor', '35b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/category/additional-videos',
        component: ComponentCreator('/learndevopsonline/build/docs/category/additional-videos', '4e4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/category/expense-app-project-setup-documentation',
        component: ComponentCreator('/learndevopsonline/build/docs/category/expense-app-project-setup-documentation', 'a97'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/category/how-tos',
        component: ComponentCreator('/learndevopsonline/build/docs/category/how-tos', 'cc5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/category/linux-commands',
        component: ComponentCreator('/learndevopsonline/build/docs/category/linux-commands', '802'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/category/roboshop-project-setup-documentation',
        component: ComponentCreator('/learndevopsonline/build/docs/category/roboshop-project-setup-documentation', 'cd2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/Expense-Project/backend',
        component: ComponentCreator('/learndevopsonline/build/docs/Expense-Project/backend', '653'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/Expense-Project/frontend',
        component: ComponentCreator('/learndevopsonline/build/docs/Expense-Project/frontend', '6fc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/Expense-Project/mysql',
        component: ComponentCreator('/learndevopsonline/build/docs/Expense-Project/mysql', 'eb5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/Expense-Project/project-overview',
        component: ComponentCreator('/learndevopsonline/build/docs/Expense-Project/project-overview', '809'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/How-Tos/aws-cloud9-service-as-editor',
        component: ComponentCreator('/learndevopsonline/build/docs/How-Tos/aws-cloud9-service-as-editor', '9fe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/How-Tos/create-allow-all-security-group',
        component: ComponentCreator('/learndevopsonline/build/docs/How-Tos/create-allow-all-security-group', 'e39'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/How-Tos/how-to-delete-default-vpc',
        component: ComponentCreator('/learndevopsonline/build/docs/How-Tos/how-to-delete-default-vpc', 'f63'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/How-Tos/how-to-increase-disk-size-of-ec2',
        component: ComponentCreator('/learndevopsonline/build/docs/How-Tos/how-to-increase-disk-size-of-ec2', '7b3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/How-Tos/how-to-make-notes-with-notion',
        component: ComponentCreator('/learndevopsonline/build/docs/How-Tos/how-to-make-notes-with-notion', '40d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/How-Tos/how-to-view-code-in-github-of-particular-day',
        component: ComponentCreator('/learndevopsonline/build/docs/How-Tos/how-to-view-code-in-github-of-particular-day', 'a2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/How-Tos/increase-spot-quota',
        component: ComponentCreator('/learndevopsonline/build/docs/How-Tos/increase-spot-quota', 'e3a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/How-Tos/install-intellij',
        component: ComponentCreator('/learndevopsonline/build/docs/How-Tos/install-intellij', '5cb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/How-Tos/open-multiple-repos-in-one-editor',
        component: ComponentCreator('/learndevopsonline/build/docs/How-Tos/open-multiple-repos-in-one-editor', '8ac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/How-Tos/push-code-automatically-to-central-repos',
        component: ComponentCreator('/learndevopsonline/build/docs/How-Tos/push-code-automatically-to-central-repos', '614'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/How-Tos/setup-intellij-in-desktop',
        component: ComponentCreator('/learndevopsonline/build/docs/How-Tos/setup-intellij-in-desktop', '9d6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/How-Tos/show-name-tag-in-spot-request',
        component: ComponentCreator('/learndevopsonline/build/docs/How-Tos/show-name-tag-in-spot-request', 'fb6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/How-Tos/workstation-user-create-and-setup',
        component: ComponentCreator('/learndevopsonline/build/docs/How-Tos/workstation-user-create-and-setup', '2c9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/intro',
        component: ComponentCreator('/learndevopsonline/build/docs/intro', '9d0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/linux/linux-commands',
        component: ComponentCreator('/learndevopsonline/build/docs/linux/linux-commands', '962'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project/cart',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project/cart', 'b17'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project/catalogue',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project/catalogue', 'f7c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project/dispatch',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project/dispatch', 'ed1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project/frontend',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project/frontend', '65f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project/mongodb',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project/mongodb', 'bb8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project/mysql',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project/mysql', 'adb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project/payment',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project/payment', 'ca7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project/project-overview',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project/project-overview', '8bc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project/rabbitmq',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project/rabbitmq', '913'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project/redis',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project/redis', '08f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project/shipping',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project/shipping', '65c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project/user',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project/user', 'bb6'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/learndevopsonline/build/',
    component: ComponentCreator('/learndevopsonline/build/', 'b1c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

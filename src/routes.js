import Home from "./components/Home.vue";

const routes = [
  {
    path: "/",
    redirect: { name: "home" },
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    children: [
      {
        path: "products",
        name: "products",
        component: () =>
          import("./components/ProductsSection/ProductsSection.vue"),
      },
    ],
  },
  {
    path: "*",
    redirect: { name: "home" },
  },
];

export default routes;

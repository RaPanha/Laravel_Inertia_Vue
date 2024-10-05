import "./bootstrap";
import "../css/app.css";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { ZiggyVue } from "../../vendor/tightenco/ziggy";
import { setThemeOnLoad } from "./theme";

createInertiaApp({
    resolve: (name) => {
        return _resolvePageComponent(
            name,
            import.meta.glob("./Pages/**/*.vue")
        );
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: "#0077b6",
        showSpinner: true,
    },
});

function _resolvePageComponent(name, pages) {
    for (const path in pages) {
        if (path.endsWith(`${name.replace(".", "/")}.vue`)) {
            return typeof pages[path] === "function"
                ? pages[path]()
                : pages[path];
        }
    }

    throw new Error(`Page not found: ${name}`);
}

setThemeOnLoad();

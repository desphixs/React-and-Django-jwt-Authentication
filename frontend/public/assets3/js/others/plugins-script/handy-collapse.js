const myAccrodion = new HandyCollapse({
    nameSpace: "hc",
    activeClass: "accordion-active",
    animationSpeed: 200,
    onSlideStart: (isOpen, contentID) => {
        document.querySelectorAll(`[data-hc-control='${contentID}']`);
    },
});

myAccrodion.open("content01");

const dashboardSidebar = document.querySelector(".dashboard-sidebar");
dashboardSidebar.querySelectorAll(".sidebar-link").forEach((link) => {
    const {
        activePage,
        pageName
    } = link.dataset;
    if (activePage && pageName && activePage === pageName) {
        const {
            targetDropdown
        } = link.dataset;

        myAccrodion.open(targetDropdown);
        const button = document.getElementById(targetDropdown);
        button.classList.add("bg-gray-700", "text-blue-500");
        button.querySelectorAll("svg")[1].classList.add("text-blue-500");
    }
});
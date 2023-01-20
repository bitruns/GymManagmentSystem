$(() => {
    const $menu = $(".menu");
    const $logoBtn = $(".logo-button");
    const $closeBtn = $(".menu__close-btn");

    $logoBtn.click(() => {
        $menu.show(200);
    });

    $closeBtn.click(() => {
        $menu.hide(200);
    });
});

// Fetch user from Database and display Menu
const fetchUser = async () => {
    const user = await $.get("/user")
    if (user === "") {
        $("#public-menu").show();
        console.log("No user")
    }
    // Logged in as Customer
    else if (user.type === "member") {
        $("#member-menu").show();

    }
    // Logged in as Trainer
    else if (user.type === "admin") {
        $("#admin-menu").show();
    }

    return user;
};
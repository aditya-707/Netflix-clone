let tl = gsap.timeline();

tl.from(".logo", {
    y: -30,   // Reduced movement
    opacity: 0,
    duration: 1.2,  // Shorter duration
    ease: "expo.out",
    delay: 0.3,  // Faster start
})
    .fromTo(
        ".nav-btn .lang",
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "expo.out" },
        "-=0.8"
    )
    .fromTo(
        ".nav-btn .signup-btn",
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "expo.out" },
        "-=0.8"
    )
    .from(".text h1", { y: -30, opacity: 0, duration: 1.2, ease: "expo.out" })
    .from(
        ".text .p1",
        { y: -30, opacity: 0, duration: 1.2, ease: "expo.out" },
        "-=1"
    )
    .from(
        ".text .p2",
        { y: -30, opacity: 0, duration: 1.2, ease: "expo.out" },
        "-=1"
    )
    .from(
        ".login-email .email",
        { x: -50, opacity: 0, duration: 1, ease: "power3.out" },
        "-=0.9"
    )
    .fromTo(
        ".login-email .started",
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=1.2"
    );

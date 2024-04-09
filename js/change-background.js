export function changeBackgroundImage (route) {
    const body = document.body

    if(route.includes("home")) {
        body.style.backgroundImage = "url(../assets/mountains-universe-1.png)"
    } else if (route.includes("universe")) {
        body.style.backgroundImage = "url(../assets/mountains-universe02.png)"
    } else if (route.includes("discover")) {
        body.style.backgroundImage = "url(../assets/mountains-universe-3.png)"
    }
}
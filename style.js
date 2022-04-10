/**
 * 
 * @param {Event} evt 
 */

const accord = (evt) => {
    const qas = document.getElementsByClassName("qa");
    let i;
    
    if (evt.currentTarget.className.includes(" active")) {
        evt.currentTarget.className = evt.currentTarget.className.replace(" active", "");
    } else if (!evt.currentTarget.className.includes(" active")) {
        for (i = 0; i <= 4; i++) {
            qas.item(i).className = qas.item(i).className.replace(" active", "");
        }

        evt.currentTarget.className += " active";
    }

    console.log("wrking");

}
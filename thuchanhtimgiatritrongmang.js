function tapsobatky() {
    let x = [1,23,2,3,21,2,3,23,23,2,3,23,21,3,4,124,21,4,12,13,12,3,2,2,4,23,2,32,33];
    let y= document.getElementById("nhapso").value;
    for (let i = 0; i < x.length; i++) {
        if (isNaN(y)==false) {
            if (y== x[i]) {
                alert("ban da nhap dung so roi");
                break;
            }
            else {
                alert("ban nhap sai so roi");
                break;
            }
        }
        else {
            alert("ban nhap sai so roi");
            break;
        }
        }

}

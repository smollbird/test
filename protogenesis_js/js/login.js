window.onload = function () {
    $().getId("login").center()
    $().getId('register-btn').click(e => {
        e.preventDefault
        window.location.href = "./register.html";
    })
    $().getTagName('input').click(function () {
        if (this.name == 'email') {
            this.oninput = function () {
                var re = /^\w+@[0-9a-z]+\.[a-z]+$/i;
                if (this.value.length != 0 && re.test(this.value)) {

                    $().getId('tips').html('格式正确')
                    console.log($())
                } else {
                    $().arrbool['mailbox_bool'] = true
                    $().getId('tips').html('格式不正确')
                    console.log($().arrbool)
                }
            }

        }
        else if (this.name === 'pwd') {
            var re = /^[a-zA-Z\d_]{6,15}$/;
            if (this.value.length != 0 && re.test(this.value)) {
                $().getId('tip').html('格式正确')
            } else {
                $().getId('tip').html('格式不正确')
            }
        }
        /* switch(this.name){
            case email:
                console.log(i++)
                break
            case pwd:
                break
            default:
                break */
    })
}




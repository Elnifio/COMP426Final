$(() => {
    // alert("success");

    // useless
    /**
    $("#postitem").submit(async function(e) {
        e.preventDefault();
        const result = await axios({
            method:"post",
            url:"./postitem",
            data: $("#postitem").serialize()
        });
        console.log(result);
    });
    */
    // checklogin 按钮的 event handler
    $("#checklogin").on("click", async function(e) {
        e.preventDefault();
        const result = await axios({
            method:"get",
            url:"./verifylogin"
        })
        $("#loginstatus").text(result.data.login);
    })

    // logout 按钮的 event handler
    $("#logout").on("click", async function(e) {
        e.preventDefault();
        const result = await axios({
            method:"get",
            url: "./logout",
        });
        console.log(result);
    });

    // 注册用户的 handler
    $("#registerForm").on("submit", async function(e) {
        e.preventDefault();

        let name = e.target.name.value;
        let pwd = e.target.password.value;
        let email = e.target.email.value;

        const result = await axios({
            method: "post",
            url: "./createuser",
            // 注意 data 里面一定要有 name，password 和 email 这三个 key
            data: {
                name,
                "password": pwd,
                email
            },
            // 注意 headers 里面一定要有这个 CSRFToken
            headers:{"X-CSRFToken":$.cookie('csrftoken')}
        });
        console.log(result);
    });

    $("#LoginForm").on("submit", async function(e) {
        e.preventDefault();
        console.log(e);
        let email = e.target.loginemail.value;
        let pwd = e.target.loginpassword.value;
        const result = await axios({
            method: "post",
            url: "./verifyuser",
            // 注意 data 里面一定要有 email 和 password 这两个 key
            data: {
                email,
                "password": pwd
            },
            // 注意 headers 里面一定要有这个 CSRFToken
            headers:{"X-CSRFToken":$.cookie('csrftoken')}
        });
        console.log(result);
    });

    $("#testAllItems").on("click", async function(e) {
        e.preventDefault();
        console.log("querying..");
        let skip = 0;
        let limit = 50;
        const request = await axios({
            method: "get",
            url: "./allitems",
            params: { skip, limit },
        })
        // console.log(request);
        let data = request.data.result;
        console.log(data);
        $("#display").children().remove()
        console.log("Finished fetching");
        data.map(x => {
            let area = document.createElement("div");
            area.id = `item${x.id}`;
            area.style.float="left";
            $("#display").append(area);

            let image = document.createElement("img");
            image.width = 100;
            image.height = 100;
            image.src = x.picture;
            image.alt = `Image of ${x.name}`;
            area.append(image)

            let name = document.createElement("h3");
            name.innerHTML = x.name;
            area.append(name);

            let save_button = document.createElement("button");
            save_button.id = `saveitem${x.id}`;
            save_button.innerHTML = "Save one to your account";
            area.append(save_button);
            area.append(document.createElement("hr"));
        })

        data.map(x => {
            $(`#saveitem${x.id}`).on("click", async function(e) {
                e.preventDefault();
                console.log(`saving item ${x.id}...`)
                const result = await axios({
                    method:"post",
                    url:"./save",
                    data: {
                        'itemid': x.id,
                        'amount': 1
                    },
                    headers:{"X-CSRFToken":$.cookie('csrftoken')}
                })
                console.log(result);
            })
        })

    });

    $("#testGetItem").on("click", async function(e) {
        e.preventDefault();
        console.log("querying items...");
        const result = await axios({
            method: "get",
            url: "./item/1",
        });
        console.log(result);
        console.log(result.data);
    });

    $("#testAllCategories").on("click", async function(e) {
        e.preventDefault();
        console.log("querying items...");
        const result = await axios({
            method: "get",
            url: "./categories",
        });
        console.log(result);
        console.log(result.data);
    });
});
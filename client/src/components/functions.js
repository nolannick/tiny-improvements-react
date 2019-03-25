const getAllKudos = function () {
    $.get("/api/kudos").then(function (kudos) {
        renderTable(kudos);
        console.log(kudos);
    });
};

const renderTable = function (kudos) {
    //empty product table prior to rendering
    $("#kudos").empty();

    //loop through products in table and insert HTML for each row of the table
    kudos.forEach(function (element) {
        $("#kudos").append(
            `<div class="card shadow-lg p-3 mb-5 bg-white rounded">
                <h5>${element.title}</h5>
                <h6>From: ${element.sender.username}</h6>
                <div class="card-body">
                    <h6>To: ${element.receiver.username}</h6>
                    <p>${element.body}</p>
                </div>
            </div>`);

    });
};

const postKudos = function (kudosJson) {
    $.post('/api/kudos', kudosJson)
        .then(function (data) {
            console.log(data);

            $("#kudo-body").val("");
            $("#kudo-title").val("");
            $("#kudo-from").val("Select Sender");
            $("#kudo-to").val("Select Receiver");
            $(".alertDiv").empty();
            $(".modal").modal("hide");
            getAllKudos();
        })
};

const createPostJson = function () {

    let kudosJson = {};
    let title = $('#kudo-title').val().trim();
    let body = $('#kudo-body').val().trim();
    let sender = $('#kudo-from').val();
    let receiver = $('#kudo-to').val();

    if (title === null || body === null || sender === null || receiver === null) {
        $(".alertDiv").empty();
        $(".alertDiv").append(`<div class="alert alert-danger" role="alert">
        Please complete all fields!</div>`)
    } else {

        kudosJson = {
            title: title,
            body: body,
            sender: sender,
            receiver: receiver
        };

        console.log(kudosJson);
        postKudos(kudosJson);
    };
};

const getAllUsers = function () {
    $.get("/api/users").then(function (users) {
        populateDropdowns(users);
        console.log(users);
    });
}

const populateDropdowns = function (usersArray) {

    usersArray.forEach(function (element) {
        $("#kudo-from").append(
            `<option value=${element._id}>${element.username}</option>`
        );
        $("#kudo-to").append(
            `<option value=${element._id}>${element.username}</option>`
        );
    });
};

$("#send-kudo").on("click", createPostJson);
getAllKudos();
getAllUsers();

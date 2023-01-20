$(async () => {
    const user = await fetchUser();
    console.log(user)

    let html = null;
    if (user === null) {
        window.location = "/";
    }
    if (user.type == "member") {
        const member = await getMember(user.id);
        html = getMemberHtml(member);
    }
    
    const $mainContainer = $(".main-container");
    $mainContainer.html(html);
});

const getMember = (id) => {
    return $.get(`/api/member/${id}`);
};

const getMemberHtml = (member) => {
    return `
    <script>
    $(document).ready(function() {
        $(document).on("click","#changeTrainer",function() {
            var out = $.ajax({
                url: "/api/member/${member.id}/toggleTrainer",
                type: 'PUT',
                success: function(e){
                    if(e===true){
                        $('#wantTrainer').html("Want Trainer: true")
                    }else if (e===false){
                        $('#wantTrainer').html("Want Trainer: false")
                    }
                },
              });
              
        });
    });
    </script>
        <div class="details__container">
            <div class="details__header">
                <div class="name-container">
                    <h2>${member.name}</h2>
                    <h3><b>Membership ID: </b>${member.id}</h3>
                </div>
            </div>

            <div class="details_content">
                <p>
                    <b id="wantTrainer">Want Trainer: ${member.wantTrainer}</b>
                    <button id="changeTrainer">Change</button><br><br>
                    <b>Change Password:</b>
                    <form class="" action="/api/member/${member.id}/changePassword" method="POST">
                        <input type="password" class="password" name="passwordold" placeholder="Current Password" required>
                        <input type="password" class="password" name="passwordnew" placeholder="Desired New Password" required>
                        <button type="submit" class="btn">Change</button>
                    </form>
                </p>
                <p>
                    <form name="ageForm" action="/api/member/${member.id}/updateAge" method="POST">
                        <input type="number" placeholder="age" id="age" name="age" min="16" max="120">
                            <button type="submit" id="updateAge">Update Age</button>
                        <b>Age: </b><div style="white-space: nowrap; display:inline" id=memberAge>${member.age}</div><br>
                    </form>
                    <form name="weightForm" action="/api/member/${member.id}/updateWeight" method="POST">
                    <input type="number" placeholder="weight" id="weight" name="weight" min="20" max="450">
                            <button type="submit" id="updateWeight">Update Weight</button>
                            <b>Weight in Pounds: </b><div style="white-space: nowrap; display:inline" id="memberWeight">${member.weight}</div> lbs<br>
                    </form>
                    <form name="heightForm" action="/api/member/${member.id}/updateHeight" method="POST">
                    <input type="number" placeholder="height" id="height" name="height" min="10" max="250">
                        <button type="submit" id="updateHeight">Update Height</button>
                        <b>Height in Cm: </b><div style="white-space: nowrap; display:inline" id="memberHeight">${member.height}</div> cm
                    </form>
                </p>
                </div>
            </div>
            <div class="sidebar">
                <div class="trainer__details">
                    <h2>${member.name}</h2>
                    <p><b>Bookings: </b>${member.timeslot}</p>
            </div>
        </div>    
    `;
};

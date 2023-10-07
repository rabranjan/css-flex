$(function() {
    // alert("hello");
        $.ajax({
        url: "/demo-json.json",
        success: function(result){
            var personDetails = result.Person;
            personDetails.forEach(person => {
                var rowDiv = document.createElement("div");
                rowDiv.className = "row";
                var columnDiv = document.createElement("div");
                columnDiv.className = "column";
                var contentCenterDiv =  document.createElement("div");
                contentCenterDiv.className = 'f-content-center';
                var contentDiv =  document.createElement("div");
                contentDiv.className = 'white-column content';
                contentDiv.innerHTML = person["firstName"];

                contentCenterDiv.appendChild(contentDiv);
                columnDiv.appendChild(contentCenterDiv);

                rowDiv.appendChild(columnDiv);

                var columnDiv = document.createElement("div");
                columnDiv.className = "column";
                var contentCenterDiv =  document.createElement("div");
                contentCenterDiv.className = 'f-content-center';
                var contentDiv =  document.createElement("div");
                contentDiv.className = 'white-column content';
                contentDiv.innerHTML = person["lastName"];

                contentCenterDiv.appendChild(contentDiv);
                columnDiv.appendChild(contentCenterDiv);

                rowDiv.appendChild(columnDiv);
                $("#person-details").append(rowDiv);
            });
        }
    });
});
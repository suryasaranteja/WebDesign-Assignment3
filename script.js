
function addRecord1(){
    alert("Submitted") ;
}
function clickedimg(event){
    var a = event.parentElement.parentElement;
    var nextRow = a.nextElementSibling;
    if (nextRow && nextRow.classList.contains("dropDownTextArea")) {
      nextRow.style.display = nextRow.style.display === "none" ? "table-row" : "none";
  }
  
  }
document.addEventListener("DOMContentLoaded", function () {
  const table = document.getElementById("myTable");
  const additionalInfoRows = table.getElementsByClassName("dropDownTextArea");

  for (let i = 0; i < additionalInfoRows.length; i++) {
      additionalInfoRows[i].style.display = "none";
  }

  table.addEventListener("click", function (event) {
      if (event.target.tagName === "img") {
          const parentRow = event.target.closest("tr");
          const nextRow = parentRow.nextElementSibling;
          if (nextRow && nextRow.classList.contains("dropDownTextArea")) {
              nextRow.style.display = nextRow.style.display === "none" ? "table-row" : "none";
          }
      }

      const checkboxes = table.querySelectorAll('input[type="checkbox"]');
      const submitButton = document.getElementById("button1");

      const isChecked = Array.from(checkboxes).some((checkbox) => checkbox.checked);

      if (isChecked) {
          submitButton.removeAttribute("disabled");
          submitButton.style.backgroundColor="orange";
      } else {
          submitButton.setAttribute("disabled", true);
          submitButton.style.backgroundColor="rgb(244, 236, 236)";
      }
  });
});

var lastIndex=3 ;
function addRecord(){
    var a = "This class is awesome" ;
    var table = document.getElementById("myTable");
    var tbody = document.getElementsByTagName("tbody")[0] ;
    var studentName = table.rows[5]?.firstElementChild?.nextElementSibling?.innerHTML || "New Student" ;
    console.log(studentName) ;
    var trNode = document.createElement("tr") ;
    var tdCheckBoxNode = document.createElement("td") ;
    tdCheckBoxNode.innerHTML = '<input type = "checkbox" onclick="onClickCheckBox(this)" /><br /><br /><img onclick="clickedimg(this)" src="down.png" width="25px" />'

    var tdStudentNode = document.createElement("td") ;
    tdStudentNode.innerHTML = 'Student ' +(++lastIndex)

    var tdAdvisorNode = document.createElement("td") ;
    tdAdvisorNode.innerHTML = 'Teacher ' +(lastIndex)

    var tdAwardNode = document.createElement("td") ;
    tdAwardNode.innerHTML = 'Approved ' 

    var tdSemesterNode = document.createElement("td") ;
    tdSemesterNode.innerHTML = 'Fall ' 

    var tdTypeNode = document.createElement("td") ;
    tdTypeNode.innerHTML = 'TA '

    var tdBudgetNode = document.createElement("td") ;
    tdBudgetNode.innerHTML = 34567 +(lastIndex+11)

    var tdPercentageNode = document.createElement("td") ;
    tdPercentageNode.innerHTML = '100% '

    var tdEditNode = document.createElement("td");
    var editButton = document.createElement("button") ;
    editButton.textContent = "Edit" ;
    editButton.addEventListener("click",function(){
        alert("Edit button for clicked row "+lastIndex);
    });

    var tdDeleteNode = document.createElement("td");
    var deleteButton = document.createElement("button") ;
    deleteButton.textContent = "Delete" ;
    deleteButton.addEventListener("click",function() {
        trNode.remove();
    });

    tdEditNode.appendChild(editButton) ;
    tdDeleteNode.appendChild(deleteButton) ;

    trNode.appendChild(tdCheckBoxNode) ;
    trNode.appendChild(tdStudentNode) ;
    trNode.appendChild(tdAdvisorNode) ;
    trNode.appendChild(tdAwardNode) ;
    trNode.appendChild(tdSemesterNode) ;
    trNode.appendChild(tdTypeNode) ;
    trNode.appendChild(tdBudgetNode) ;
    trNode.appendChild(tdPercentageNode) ;
    tbody.appendChild(trNode) ;
    
    var trNode1 = document.createElement("tr") ;
    trNode1.setAttribute('class','dropDownTextArea');
    var tdNode1 = document.createElement("td") ;
    trNode1.style.display = 'none';
    tdNode1.innerHTML = 'Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br /> Comments:<br /><br /><br />Award Status:<br /><br /><br />' ;
    tdNode1.setAttribute('colspan','8');
    trNode1.appendChild(tdNode1);
    tbody.appendChild(trNode1) ;



    table.addEventListener("click", function (event) {
        if (event.target.tagName === "IMG") {
            const parentRow = event.target.closest("tr");
            const nextRow = parentRow.nextElementSibling;
            if (nextRow && nextRow.classList.contains("dropDownTextArea")) {
                nextRow.style.display = nextRow.style.display === "none" ? "table-row" : "none";
            }
        }
    });

}

function onClickCheckBox(checkbox){
    var selectedRow = checkbox.parentElement.parentElement ;
    if(checkbox.checked == true){
        selectedRow.style.backgroundColor="yellow" ;

        
        var tdDeleteNode = document.createElement("td") ;
        var deleteButton = document.createElement("button") ;
        deleteButton.textContent = "Delete" ;
        var p = selectedRow.rowIndex ;
        var valu = selectedRow.childNodes[1].nextElementSibling.innerHTML;
        // console.log(selectedRow.childNodes[1].nextElementSibling);
        // console.log(valu);
        deleteButton.addEventListener("click",function(){
            alert("Do you want to delete Student "+valu.split(' ')[1]) ;
            selectedRow.remove();
            alert("Deleted Student "+valu.split(' ')[1]) ;
        });
        tdDeleteNode.appendChild(deleteButton);
        selectedRow.appendChild(tdDeleteNode);

        var tdEditNode = document.createElement("td");
        var editButton = document.createElement("button");
        editButton.textContent = 'Edit';
        var p = selectedRow.rowIndex;
        var valu = selectedRow.childNodes[1].nextElementSibling.innerHTML;
    
        editButton.addEventListener("click", function () {
        prompt('Edit Details of Student ' + valu.split(' ')[1]);
        }); 

        tdEditNode.appendChild(editButton);
        selectedRow.appendChild(tdEditNode);
    }
    else{
        selectedRow.style.backgroundColor="white" ;
        selectedRow.deleteCell(8) ;
        selectedRow.deleteCell(8) ;
        selectedRow.deleteCell(8) ;
    }
    console.log(checkbox) ;
}

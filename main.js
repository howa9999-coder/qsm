//Navbar

const navLinks = document.querySelector('.menu')
function onToggleMenu(e) {
  navLinks.classList.toggle('nav-height')

    if (e.name === 'menu') {
        e.name = 'close';
    } else {
        e.name = 'menu';
    }
} 

// Add a new card
let cardCounter = 0;
document.getElementById("add-card").addEventListener("click", function() {
    const cardContainer = document.getElementById("card-container");
    cardCounter++; 
  
    const newCard = document.createElement("div");
    newCard.classList.add("custom-card","student", "new-card");

    // Create a unique ID prefix based on the card counter
    const uniqueIdPrefix = `card-${cardCounter}`;

    newCard.innerHTML = `
     <div class=" student-card ">
  <button class="close-btn " onclick="removeCard(this)">×</button>
  <div class="card-title-container" id="card-${cardCounter}">
    <h2 class="card-title">بطاقة الورد اليومي</h2>
  </div>
  <div class="div-line"></div>  

  <!-- Memorization -->
  <div class="select-container">
    <label for="${uniqueIdPrefix}-daily-memorization" >حفظ الورد اليومي:</label>
    <select id="${uniqueIdPrefix}-daily-memorization" class="select">
      <option value="0.5">نعم</option>
      <option value="0">لا</option>
     
    </select>
  </div>

  <!-- Tafssir -->
  <div class="select-container">
    <label for="${uniqueIdPrefix}-tafssir" > قراءة ورد التفسير   :</label>
    <select id="${uniqueIdPrefix}-tafssir" class="select">
      <option value="0.5">نعم</option>
      <option value="0">لا</option>
     
    </select>
  </div>

  <!-- Partner -->
  <div class="select-container">
    <label for="${uniqueIdPrefix}-partner" >مراجعة مع رفيقة  :</label>
    <select id="${uniqueIdPrefix}-partner" class="select">
      <option value="1">نعم</option>
      <option value="0">لا</option>
     
    </select>
  </div>


  <!-- Dropdown Select input -->
  <div class="select-container">
    <label for="${uniqueIdPrefix}-review-frequency" >تحديد مقدار المراجعة:</label>
    <select id="${uniqueIdPrefix}-review-frequency" class="select">
      <option value="1">مراجعة الحفظ التراكمي + مقدار المراجعة</option>
      <option value="0.5">مراجعة الحفظ التراكمي مع نقص في مقدار المراجعة</option>
      <option value="0.75">مراجعة الحفظ التراكمي مع تغيير في مقدار المراجعة</option>
      <option value="0.5">مراجعة الحفظ التراكمي فقط</option>
      <option value="0.75">مراجعة مقدار المراجعة فقط</option>
      <option value="0.25">عدم مراجعة الحفظ التراكمي مع نقص في مقدار المراجعة</option>
      <option value="0.5">عدم مراجعة الحفظ التراكمي مع تغيير في مقدار المراجعة</option>
      <option value="0">عدم المراجعة على الإطلاق</option>
    </select>
  </div>

  <!-- Catch up checkbox with label -->
  <div class="q-input-container">
    <input type="checkbox" id="${uniqueIdPrefix}-catch-up" class="q-input">
    <label for="${uniqueIdPrefix}-catch-up" class="q-label">إستدراك</label>
  </div>
</div>
    `;

    // Append the new card to the container
    cardContainer.appendChild(newCard);
    scrollToSection(`card-${cardCounter}`);
    counterForCards()
});

// **************************************************************************Function to remove a card
function removeCard(button) {
  cardCounter = cardCounter-1
    const card = button.closest('.custom-card');
    card.remove();
    counterForCards()
  }
//*****************************************************************************scroll to section */
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: 'smooth', 
    block: 'start'      
  });
}
// ******************************************************************************Tajwid
var tajwid = 0;
//var meet = 0;
var tajwidCatchUp = 0;
const tajwidCheckbox = document.querySelector(`#tajwid`);
tajwidCheckbox.addEventListener("change", function() {
  if (this.checked) {
    tajwid = 2
    console.log(tajwid)
  } else {
    tajwid = 0
    console.log(tajwid)

  }
});
const tajwidCheckboxCatchUp = document.querySelector(`#tajwid-catch-up`);
tajwidCheckboxCatchUp.addEventListener("change", function() {
  if (this.checked) {
    tajwidCatchUp = 1
    console.log(tajwidCatchUp)

  } else {
    tajwidCatchUp = 0
    console.log(tajwidCatchUp)

  }
});

// *******************************************************************************Result
result.addEventListener("click", function () {
  // Arrays to store data
  let memorization = [];
  const revision = [];
  const tafssir = [];
  const partner = [];
  let memorizationCatchUp = [];
  const revisionCatchUp = [];
  const tafssirCatchUp = [];
  const partnerCatchUp = [];
  const catchUpSession = [];
  const meet = null

  // Query all student cards
  const cards = document.querySelectorAll(".student-card");
  cards.forEach((card) => {
    



    // Query select inputs
    const catchUpCheckBox = card.querySelector('input[id$="-catch-up"]')
    const memoSelect = card.querySelector('select[id$="-daily-memorization"]');
    const tafssirSelect = card.querySelector('select[id$="-tafssir"]');
    const partnerSelect = card.querySelector('select[id$="-partner"]');
    const reviewSelect = card.querySelector('select[id$="-review-frequency"]');

    if (catchUpCheckBox && catchUpCheckBox.checked) {
      // Process as catch-up session
      catchUpSession.push(1);
      valuePushed(memoSelect, 2, memorizationCatchUp);
      valuePushed(tafssirSelect, 2, tafssirCatchUp);
      valuePushed(partnerSelect, 2, partnerCatchUp);
      valuePushed(reviewSelect, 2, revisionCatchUp);
    } else {
      // Regular processing
      valuePushed(memoSelect, 1, memorization);
      valuePushed(tafssirSelect, 1, tafssir);
      valuePushed(partnerSelect, 1, partner);
      valuePushed(reviewSelect, 1, revision);
    }
  });

// Calculate sum 
const revisionSum = revision.reduce((acc, curr) => acc + curr, 0);
const memorizationSum = memorization.reduce((acc, curr) => acc + curr, 0);
const tafssirSum = tafssir.reduce((acc, curr) => acc + curr, 0);
const revisionSumCatchUp = revisionCatchUp.reduce((acc, curr) => acc + curr, 0);
const memorizationSumCatchUp = memorizationCatchUp.reduce((acc, curr) => acc + curr, 0);
const tafssirSumCatchUp = tafssirCatchUp.reduce((acc, curr) => acc + curr, 0);
const partnerSum = partner.reduce((acc, curr) => acc + curr, 0);
const partnerSumCatchUp = partnerCatchUp.reduce((acc, curr) => acc + curr, 0);


// Adjust revisionMark based on conditions
let revisionMark = revisionSum;
var NormalSession = cardCounter - catchUpSession.length
if (NormalSession >= 3 && partnerSum < 3 && revisionSum>0) {
  revisionMark = revisionSum -1; // Adjust if condition is met
}
let revisionMarkCatchUp = revisionSumCatchUp;
if (catchUpSession.length >= 3 && partnerSumCatchUp < 3 && revisionSumCatchUp>0) {
  revisionMarkCatchUp = revisionSumCatchUp - 0.5; // Adjust if condition is met
}
//Result
  document.querySelector("#name").innerHTML = document.querySelector("#name-input").value;
  document.querySelector("#tajwid-mark").innerHTML = tajwid;
  document.querySelector("#tajwid-mark-catch-up").innerHTML = "+" + tajwidCatchUp;
  document.querySelector("#meet-mark").innerHTML = meet;
  document.querySelector("#revision-mark").innerHTML = revisionMark;
  document.querySelector("#memo-mark").innerHTML = memorizationSum;
  document.querySelector("#tafssir-mark").innerHTML = tafssirSum;
  document.querySelector("#revision-mark-catch-up").innerHTML = "+" + revisionMarkCatchUp;
  document.querySelector("#memo-mark-catch-up").innerHTML = "+" +  memorizationSumCatchUp;
  document.querySelector("#tafssir-mark-catch-up").innerHTML = "+" +  tafssirSumCatchUp;
  document.querySelector("#tajwid-mark").innerHTML = tajwid;
  document.querySelector("#tajwid-mark-catch-up").innerHTML = tajwidCatchUp;
  document.querySelector("#meet-mark").innerHTML = document.querySelector("#meet").value * 2;


  // Scroll to result section
  scrollToSection("result-card");
});

// Utility function to process and push values
function valuePushed(selectInput, divisionFactor, targetArray) {
  if (selectInput) {
    const valueToPush = parseFloat(selectInput.value) / divisionFactor;
    if (!isNaN(valueToPush)) {
      targetArray.push(valueToPush);
    }
  }
}

//************************************************************************CLEAR */
document.querySelector("#clear").addEventListener('click', function(){
  cardCounter = 0
  counterForCards()

//Add initial card
  document.querySelector("#card-container").innerHTML=`
   <!-- Initial card -->
              <div  id="result-card" class="custom-card">
                <div class="initial-card-container">
                    <!-- Card Header (Student's Info) -->
                    <div class="text-center">
                      <h2 class="heading">تنقيط الطالبة</h2>
                    </div>
                  
                    <!-- Student Name -->
                    <div class="title-container">
                      <span class="title">اسم الطالبة</span>
                      <span class="mark" id="name"></span>
                    </div>
                  
                    <!-- Memorization  -->
                    <div class="title-container">
                      <span class="title">نقطة الحفظ</span>
                      <span class="mark" id="memo-mark"></span>
                      <span class="mark" id="memo-mark-catch-up"></span>
    
                    </div>
    
                    <!-- Tafseer  -->
                    <div class="title-container">
                        <span class="title">ورد التفسير</span>
                        <span class="mark" id="tafssir-mark"></span>
                        <span class="mark" id="tafssir-mark-catch-up"></span>
    
                      </div>
    
                      <!-- revision -->
                    <div class="title-container">
                        <span class="title"> نقطة المراجعة </span>
                        <span class="mark" id="revision-mark"></span>
                        <span class="mark" id="revision-mark-catch-up"></span>
                      </div>
                  
                    <!-- Class -->
                    <div class="title-container">
                      <span class="title">الحصة</span> 
                      <span class="mark" id="meet-mark"></span>
    
                    </div>
                  
                    <!-- Tajweed -->
                    <div class="title-container">
                      <span class="title">درس التجويد</span>
                      <span class="mark" id="tajwid-mark"></span>
                      <span class="mark" id="tajwid-mark-catch-up"></span>
    
                    </div>
                     <button 
                    id="copyButton" 
                    class="copy-btn">
                    <ion-icon name="copy-outline"></ion-icon>
                  </button>
                  </div>
                 
            </div>
  `
 //COPY RESULT
  document.getElementById('copyButton').addEventListener('click', function() {
    copyResult()
   });
})
//*************************************************************************Copy result */

document.getElementById('copyButton').addEventListener('click', function() {
 copyResult()
});
//**************************************************************************Copy function */
function copyResult(){const content = document.getElementById('result-card').textContent.trim();

  // Clean up the content:
  const cleanedContent = content
      .split('\n') 
      .map(line => line.trim()) 
      .filter(line => line.length > 0) 
      .join('\n'); 
  
  const textArea = document.createElement('textarea'); 
  textArea.value = cleanedContent; 
  document.body.appendChild(textArea); 
  textArea.select(); 
  document.execCommand('copy'); 
  document.body.removeChild(textArea);
  
  // Create a message element to indicate success
  const message = document.createElement('div');
  message.textContent = 'تم النسخ بنجاح';
  
  
  message.classList.add("copy");
  
  // Append the message to the body
  document.body.appendChild(message);
  
  // Remove the message after 2.5 seconds
  setTimeout(() => {
    document.body.removeChild(message);
  }, 2500);}
//**********************************************Counter */
function counterForCards(){
 document.querySelector("#counter").innerHTML= cardCounter
}



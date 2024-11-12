//Navbar

const navLinks = document.querySelector('.nav-links')
function onToggleMenu(e) {
    if (e.name === 'menu') {
        e.name = 'close';
    } else {
        e.name = 'menu';
    }
    navLinks.classList.toggle('top-[95%]')
}  
//message
  // Function to show the message and then hide it after 2 seconds
  window.onload = () => {
    const message = document.getElementById('quran-verse');

    // Show the message
    message.classList.remove('opacity-0', '-translate-y-full');
    message.classList.add('opacity-100', 'translate-y-0');

    // Hide the message after 2 seconds
    setTimeout(() => {
        message.classList.remove('opacity-100', 'translate-y-0');
        message.classList.add('opacity-0', '-translate-y-full');
    }, 3500);
}

/* // Add a new card
let cardCounter = 0; 
document.getElementById("add-card-btn").addEventListener("click", function() {
    const cardContainer = document.getElementById("card-container");
    cardCounter++; 
  
    const newCard = document.createElement("div");
    newCard.classList.add("custom-card", "student-card", "p-6", "rounded-lg", "shadow-lg", "space-y-4");
  
    // Create a unique ID prefix based on the card counter
    const uniqueIdPrefix = `card-${cardCounter}`;
  
    newCard.innerHTML = `
  <button class="text-gray-600 hover:text-gray-800 font-bold" onclick="removeCard(this)">×</button>
  <div class="flex justify-between mb-2 items-center" id="card-${cardCounter}">
    <h2 class="text-xl font-bold text-gray-800 mx-auto">
    بطاقة الورد اليومي 
    </h2>

  </div>
  <div class="w-full h-1 bg-black"></div>  
  <!-- First checkbox with label -->
    <div class="flex items-center space-x-2">
      <input type="checkbox" id="${uniqueIdPrefix}-daily-memorization" value="0.5" class="text-pink-500">
      <label for="${uniqueIdPrefix}-daily-memorization" class="text-gray-800">الحفظ الجديد اليومي</label>
    </div> 
  <!-- Second checkbox with label -->
    <div class="flex items-center space-x-2">
      <input type="checkbox" id="${uniqueIdPrefix}-tafssir" value="0.5" class="text-pink-500">
      <label for="${uniqueIdPrefix}-tafssir" class="text-gray-800">قراءة ورد التفسير كاملا</label>
    </div>   
  <!-- Third checkbox with label -->
    <div class="flex items-center space-x-2">
      <input type="checkbox" id="${uniqueIdPrefix}-partner" class="text-pink-500">
      <label for="${uniqueIdPrefix}-partner" value="1" class="text-gray-800">المراجعة مع الرفيقة</label>
    </div>    
    <!-- Dropdown Select input -->
    <div class="flex flex-col space-x-2">
      <label for="${uniqueIdPrefix}-review-frequency" class="text-gray-800">تحديد مقدار المراجعة:</label>
      <select id="${uniqueIdPrefix}-review-frequency" class="text-gray-800 mt-2 border border-gray-300 rounded-md px-2 py-1 w-full sm:w-auto">
        <option> </option>
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
    <div class="flex items-center space-x-2">
      <input type="checkbox" id="${uniqueIdPrefix}-catch-up" class="text-pink-500">
      <label for="${uniqueIdPrefix}-catch-up" class="text-gray-800">  إستدراك </label>
    </div>  
  </div>
</div>
`;

    // Append the new card to the container
    cardContainer.appendChild(newCard);

    counterForCards()
    scrollToSection(`card-${cardCounter}`)

}); */
// Add a new card
let cardCounter = 0;
document.getElementById("add-card-btn").addEventListener("click", function() {
    const cardContainer = document.getElementById("card-container");
    cardCounter++; 
  
    const newCard = document.createElement("div");
    newCard.classList.add("custom-card", "student-card", "p-6", "rounded-lg", "shadow-lg", "space-y-4");

    // Create a unique ID prefix based on the card counter
    const uniqueIdPrefix = `card-${cardCounter}`;

    newCard.innerHTML = `
      <button class="text-gray-600 hover:text-gray-800 font-bold" onclick="removeCard(this)">×</button>
      <div class="flex justify-between mb-2 items-center" id="card-${cardCounter}">
        <h2 class="text-xl font-bold text-gray-800 mx-auto">بطاقة الورد اليومي</h2>
      </div>
      <div class="w-full h-1 bg-black"></div>  

      <!-- First checkbox with label -->
      <div class="flex items-center space-x-2">
        <input type="checkbox" id="${uniqueIdPrefix}-daily-memorization" value="0.5" class="text-pink-500">
        <label for="${uniqueIdPrefix}-daily-memorization" class="text-gray-800">الحفظ الجديد اليومي</label>
      </div> 

      <!-- Second checkbox with label -->
      <div class="flex items-center space-x-2">
        <input type="checkbox" id="${uniqueIdPrefix}-tafssir" value="0.5" class="text-pink-500">
        <label for="${uniqueIdPrefix}-tafssir" class="text-gray-800">قراءة ورد التفسير كاملا</label>
      </div>   

      <!-- Third checkbox with label -->
      <div class="flex items-center space-x-2">
        <input type="checkbox" id="${uniqueIdPrefix}-partner" value="1" class="text-pink-500">
        <label for="${uniqueIdPrefix}-partner" class="text-gray-800">المراجعة مع الرفيقة</label>
      </div>    

      <!-- Dropdown Select input -->
      <div class="flex flex-col space-x-2">
        <label for="${uniqueIdPrefix}-review-frequency" class="text-gray-800">تحديد مقدار المراجعة:</label>
        <select id="${uniqueIdPrefix}-review-frequency" class="text-gray-800 mt-2 border border-gray-300 rounded-md px-2 py-1 w-full sm:w-auto">
          <option></option>
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
      <div class="flex items-center space-x-2">
        <input type="checkbox" id="${uniqueIdPrefix}-catch-up" class="text-pink-500">
        <label for="${uniqueIdPrefix}-catch-up" class="text-gray-800">إستدراك</label>
      </div>
    `;

    // Append the new card to the container
    cardContainer.appendChild(newCard);

    // Run additional setup if needed
    counterForCards();
    scrollToSection(`card-${cardCounter}`);
});

  
// **************************************************************************Function to remove a card
function removeCard(button) {
cardCounter = cardCounter-1
  const card = button.closest('.custom-card');
  card.remove();
  counterForCards()
}
// ******************************************************************************Tajwid
let tajwid = 0;
let meet = 0;
let tajwidCatchUp = 0;
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
// ******************************************************************************Meet
const meetCheckbox = document.querySelector(`#meet`);
meetCheckbox.addEventListener("change", function() {
  if (this.checked) {
    meet = 2
  } else {
    meet = 0
  }
});
// *******************************************************************************Result
result.addEventListener("click", function() {
  var memorization =[]
  var revision = []; 
  var tafssir = [];
  var partner = [];
  var memorizationCatchUp =[]
  var revisionCatchUp = []; 
  var tafssirCatchUp = [];
  var partnerCatchUp = [];
  var catchUpSession = [];


  var cards = document.querySelectorAll('.student-card'); // Get all cards
  cards.forEach(card => {
    console.log(card.querySelector('input[id$="-daily-memorization"]')); // Check if this logs each checkbox as expected

    //const catchUpCard = card.querySelector('input[id$="-catch-up"]');
    var dailyMemorization = card.querySelector('input[id$="-daily-memorization"]');    
    var tafssirCard = card.querySelector('input[id$="-tafssir"]');   
    var partnerStat = card.querySelector('input[id$="-partner"]');   
    var reviewSelect = card.querySelector('select[id$="-review-frequency"]');
    var catchUpCheckBox = card.querySelector('input[id$="-catch-up"]')
    

      //document.querySelector("#tajwid-mark").innerHTML = tajwid;
      document.querySelector("#meet-mark").innerHTML = meet;
     // document.querySelector("#tajwid-mark-catch-up").innerHTML = tajwidCatchUp;
    if(catchUpCheckBox.checked){
     // console.log(tajwidCheckBoxCatchUp)
      //Catch up session
      catchUpSession.push(1)
          //Memorization
          if (dailyMemorization.checked) {
            var  memorizationValue = Number(dailyMemorization.value)/2
                memorizationCatchUp.push(memorizationValue);
            } else {
              memorizationCatchUp.pop();
            }
            //Tafssir
            if (tafssirCard.checked) {
            var  tafssirValue = Number(tafssirCard.value)/2
                tafssirCatchUp.push(tafssirValue);
            } else {
              tafssirCatchUp.pop();
            }
            //Partner
            if (partnerStat.checked) {
                partnerCatchUp.push(partnerStat.value);
            } else {
              partnerCatchUp.pop();
            }
            //Revision
            if (reviewSelect) {
              const reviewValue = parseFloat(reviewSelect.value)/2;
              if (!isNaN(reviewValue)) {
                revisionCatchUp.push(reviewValue); // Add to revision array if it's a valid number
              }
            }

    }else{
          //Memorization
          if (dailyMemorization.checked) {
            var  memorizationValue = Number(dailyMemorization.value)
                memorization.push(memorizationValue);
            } else {
              memorization.pop();
            }
            //Tafssir
            if (tafssirCard.checked) {
            var  tafssirValue = Number(tafssirCard.value)
                tafssir.push(tafssirValue);
            } else {
              tafssir.pop();
            }
            //Partner
            if (partnerStat.checked) {
                partner.push(partnerStat.value);
            } else {
              partner.pop();
            }
            //Revision
            if (reviewSelect) {
              const reviewValue = parseFloat(reviewSelect.value);
              if (!isNaN(reviewValue)) {
                revision.push(reviewValue); // Add to revision array if it's a valid number
              }
            }

    }

  });
  
    // Calculate sum 
    const revisionSum = revision.reduce((acc, curr) => acc + curr, 0);
    const memorizationSum = memorization.reduce((acc, curr) => acc + curr, 0);
    const tafssirSum = tafssir.reduce((acc, curr) => acc + curr, 0);
    const revisionSumCatchUp = revisionCatchUp.reduce((acc, curr) => acc + curr, 0);
    const memorizationSumCatchUp = memorizationCatchUp.reduce((acc, curr) => acc + curr, 0);
    const tafssirSumCatchUp = tafssirCatchUp.reduce((acc, curr) => acc + curr, 0);

  
    // Adjust revisionMark based on conditions
    let revisionMark = revisionSum;
    var NormalSession = cardCounter - catchUpSession.length
    if (NormalSession >= 3 && partner.length < 3 && revisionSum>0) {
      revisionMark = revisionSum -1; // Adjust if condition is met
    }
    let revisionMarkCatchUp = revisionSumCatchUp;
    if (catchUpSession.length >= 3 && partnerCatchUp.length < 3 && revisionSumCatchUp>0) {
      revisionMarkCatchUp = revisionSumCatchUp - 0.5; // Adjust if condition is met
    }
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
      document.querySelector("#meet-mark").innerHTML = meet;



    scrollToSection("result-card")
  });
//*************************scroll to section */
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth', 
      block: 'start'      
    });
  }
  
//*************************************************************************Copy result */

  document.getElementById('copyButton').addEventListener('click', function() {
    // Get the content from the #result-card and not from the button itself
    const content = document.getElementById('result-card').textContent.trim();

    // Clean up the content:
    // - Trim unnecessary whitespace
    // - Replace multiple consecutive spaces with a single space
    // - Remove empty lines but preserve necessary newlines between text
    const cleanedContent = content
        .split('\n') // Split by newlines
        .map(line => line.trim()) // Trim each line
        .filter(line => line.length > 0) // Remove empty lines
        .join('\n'); // Join back with single newlines between sections

    const textArea = document.createElement('textarea'); 
    textArea.value = cleanedContent; 
    document.body.appendChild(textArea); 
    textArea.select(); 
    document.execCommand('copy'); 
    document.body.removeChild(textArea);

    // Create a message element to indicate success
    const message = document.createElement('div');
    message.textContent = 'تم النسخ بنجاح';

    // Apply Tailwind CSS classes for styling
    message.classList.add(
      'fixed', 
      'bottom-5', 
      'left-1/2', 
      'transform', 
      '-translate-x-1/2', 
      'bg-green-500', 
      'text-white', 
      'px-4', 
      'py-2', 
      'rounded', 
      'shadow-lg', 
      'text-lg', 
      'z-50'
    );

    // Append the message to the body
    document.body.appendChild(message);

    // Remove the message after 2 seconds
    setTimeout(() => {
      document.body.removeChild(message);
    }, 2500);
});


//************************************************************************CLEAR */
document.querySelector("#clear").addEventListener('click', function(){
    // Set up variables to default
  dailyMemorization = []; 
  tafssir = [];
  partner = [];
  revision = []; 
  catchUp = false;
  tajwid = 0;
  meet = 0;
cardCounter = 0;
 counterForCards()
  
  //Add initial card
    document.querySelector("#card-container").innerHTML=`
 <div class="custom-card p-6 rounded-lg m-2 md:m-0 shadow-lg space-y-4" id="result-card">
            <div class="max-w-sm w-full bg-white shadow-md rounded-lg p-6 space-y-4">
                <!-- Card Header (Student's Info) -->
                <div class="text-center">
                  <h2 class="text-xl font-bold text-gray-800">تنقيط الطالبة</h2>
                </div>
              
                <!-- Student Name -->
                <div class="flex justify-between">
                  <span class="text-gray-600 font-medium">اسم الطالبة</span>
                  <span class="text-gray-800" id="name"></span>
                </div>
              
                <!-- Memorization Point -->
                <div class="flex justify-between">
                  <span class="text-gray-600 font-medium">نقطة الحفظ</span>
                  <span class="text-gray-800" id="memo-mark"></span>
                  <span class="text-gray-800" id="memo-mark-catch-up"></span>

                </div>

                <!-- Tafseer Lesson -->
                <div class="flex justify-between">
                    <span class="text-gray-600 font-medium">ورد التفسير</span>
                    <span class="text-gray-800" id="tafssir-mark"></span>
                    <span class="text-gray-800" id="tafssir-mark-catch-up"></span>

                  </div>

                  <!-- revision -->
                <div class="flex justify-between">
                    <span class="text-gray-600 font-medium"> نقطة المراجعة </span>
                    <span class="text-gray-800" id="revision-mark"></span>
                    <span class="text-gray-800" id="revision-mark-catch-up"></span>
                  </div>
              
                <!-- Class Point -->
                <div class="flex justify-between">
                  <span class="text-gray-600 font-medium">الحصة</span> 
                  <span class="text-gray-800" id="meet-mark"></span>

                </div>
              
                <!-- Tajweed Lesson -->
                <div class="flex justify-between">
                  <span class="text-gray-600 font-medium">درس التجويد</span>
                  <span class="text-gray-800" id="tajwid-mark"></span>
                  <span class="text-gray-800" id="tajwid-mark-catch-up"></span>

                </div>
                <button 
                id="copyButton" 
                class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full mt-2 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500">
                <ion-icon name="copy-outline"></ion-icon>
              </button>  
              </div>
             
        </div>
    `
})
//**********************************************Counter */
function counterForCards(){
   document.querySelector("#counter").innerHTML= cardCounter
}



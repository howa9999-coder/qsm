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

// Arrays & var
let dailyMemorization = []; 
let tafssir = [];
let partner = [];
let revision = [];  
let catchUp = false;
let tajwid = 0;
let meet = 0;


// Add a new card
let cardCounter = 0; 
document.getElementById("add-card-btn").addEventListener("click", function() {
    const cardContainer = document.getElementById("card-container");
    cardCounter++; 
  
    const newCard = document.createElement("div");
    newCard.classList.add("custom-card", "p-6", "rounded-lg", "shadow-lg", "space-y-4");
  
    // Create a unique ID prefix based on the card counter
    const uniqueIdPrefix = `card-${cardCounter}`;
  
    newCard.innerHTML = `
  <button class="text-gray-600 hover:text-gray-800 font-bold" onclick="removeCard(this)">×</button>
  <div class="flex justify-between mb-2 items-center">
    <h2 class="text-xl font-bold text-gray-800 mx-auto">
    بطاقة الورد اليومي 
    </h2>

  </div>
  <div class="w-full h-1 bg-black"></div>
  <!-- Checkboxes and Labels -->
  <div class="space-y-4">
    <!-- First checkbox with label -->
    <div class="flex items-center space-x-2">
      <input type="checkbox" id="${uniqueIdPrefix}-new-daily-memorization" class="text-pink-500">
      <label for="${uniqueIdPrefix}-new-daily-memorization" class="text-gray-800">الحفظ الجديد اليومي</label>
    </div>
    <!-- Second checkbox with label -->
    <div class="flex items-center space-x-2">
      <input type="checkbox" id="${uniqueIdPrefix}-tafssir" class="text-pink-500">
      <label for="${uniqueIdPrefix}-tafssir" class="text-gray-800">قراءة ورد التفسير كاملا</label>
    </div>
    <!-- Third checkbox with label -->
    <div class="flex items-center space-x-2">
      <input type="checkbox" id="${uniqueIdPrefix}-partner" class="text-pink-500">
      <label for="${uniqueIdPrefix}-partner" class="text-gray-800">المراجعة مع الرفيقة</label>
    </div>
          
    <!-- Dropdown Select input -->
    <div class="flex flex-col space-x-2">
      <label for="${uniqueIdPrefix}-review-frequency" class="text-gray-800">تحديد مقدار المراجعة:</label>
      <select id="${uniqueIdPrefix}-review-frequency" class="text-gray-800 mt-2 border border-gray-300 rounded-md px-2 py-1 w-full sm:w-auto">
        <option> </option>
        <option value="1">مقدار المراجعة + الحفظ التراكمي</option>
        <option value="0.5">الحفظ التراكمي + نقص في مقدار المراجعة</option>
        <option value="0.75">الحفظ التراكمي + تغيير مقدار المراجعة</option>
        <option value="0.5">مراجعة الحفظ التراكمي فقط</option>
        <option value="0.75">مراجعة مقدار المراجعة فقط</option>
        <option value="0.25">عدم مراجعة الحفظ التراكمي + نقص مقدار المراجعة</option>
        <option value="0.5">عدم مراجعة الحفظ التراكمي + تغيير في مقدار المراجعة</option>
        <option value="0">عدم المراجعة</option>
      </select>
    </div>
  </div>
</div>
`;
    // Append the new card to the container
    cardContainer.appendChild(newCard);

    // *************************************************************Add event listener to the memo checkbox
    const dailyMemorizationCheckbox = newCard.querySelector(`#${uniqueIdPrefix}-new-daily-memorization`);
    dailyMemorizationCheckbox.addEventListener("change", function() {
      if (this.checked) {
        dailyMemorization.push(0.5);
      } else {
        dailyMemorization.pop();
      }
    });
  
    //************************************************************* */ Add event listener to the Tafssir checkbox
    const tafssirCheckbox = newCard.querySelector(`#${uniqueIdPrefix}-tafssir`);
    tafssirCheckbox.addEventListener("change", function() {
      if (this.checked) {
        tafssir.push(0.5);
      } else {
        tafssir.pop();
      }
    });
  
    //*************************************************************** */ Add event listener to the partner checkbox
    const partnerCheckbox = newCard.querySelector(`#${uniqueIdPrefix}-partner`);
    partnerCheckbox.addEventListener("change", function() {
      if (this.checked) {
        partner.push(1);
      } else {
        partner.pop();
      }
    });
});
  
// Function to remove a card
function removeCard(button) {
  const card = button.closest('.custom-card');
  card.remove();
}

//**************************************************************************** */ Catch Up
const catchUpCheckbox = document.querySelector(`#catch-up`);
catchUpCheckbox.addEventListener("change", function() {
  if (this.checked) {
    catchUp = true
  } else {
    catchUp = false
  }
});

// ******************************************************************************Tajwid
const tajwidCheckbox = document.querySelector(`#tajwid`);
tajwidCheckbox.addEventListener("change", function() {
  if (this.checked) {
    tajwid = 2
  } else {
    tajwid = 0
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
    //Name
const inputName = document.querySelector('#name-input').value
document.querySelector('#name').innerHTML = inputName
    // Collect the current revision value for each card
    revision = []; 
  
    const tafssirMark = tafssir.reduce((acc, curr) => acc + curr, 0);
    const memoMark = dailyMemorization.reduce((acc, curr) => acc + curr, 0);
    const partnerLength = partner.reduce((acc, curr) => acc + curr, 0);
  
    // Loop through all cards and get the review frequency values
    const cards = document.querySelectorAll('.custom-card'); // Get all cards
    cards.forEach(card => {
      const reviewSelect = card.querySelector('select[id$="-review-frequency"]');
      if (reviewSelect) {
        const reviewValue = parseFloat(reviewSelect.value);
        if (!isNaN(reviewValue)) {
          revision.push(reviewValue); // Add to revision array if it's a valid number
        }
      }
    });
  
    // Calculate sum of revision array
    const revisionSum = revision.reduce((acc, curr) => acc + curr, 0);
  
    // Adjust revisionMark based on conditions
    let revisionMark = revisionSum;
    if (cardCounter >= 3 && partnerLength < 3 && revisionSum>0) {
      revisionMark = revisionSum - 1; // Adjust if condition is met
    }
  
    // Handle the CatchUp condition
    if (catchUp == false) {
      document.querySelector("#tafssir-mark").innerHTML = tafssirMark;
      document.querySelector("#memo-mark").innerHTML = memoMark;
      document.querySelector("#tajwid-mark").innerHTML = tajwid;
      document.querySelector("#meet-mark").innerHTML = meet;
      document.querySelector("#revision-mark").innerHTML = revisionMark;
    } else {
      document.querySelector("#tafssir-mark").innerHTML = tafssirMark / 2;
      document.querySelector("#memo-mark").innerHTML = memoMark / 2;
      document.querySelector("#tajwid-mark").innerHTML = tajwid / 2;
      document.querySelector("#meet-mark").innerHTML = meet / 2;
      document.querySelector("#revision-mark").innerHTML = revisionMark / 2;
    }
  });
  
//*************************************************************************Copy result */

/* document.getElementById('copyButton').addEventListener('click', function() {
    const content = document.getElementById('result-card').textContent; 
    const textArea = document.createElement('textarea'); 
    textArea.value = content; 
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
   */
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
                </div>

                <!-- Tafseer Lesson -->
                <div class="flex justify-between">
                    <span class="text-gray-600 font-medium">ورد التفسير</span>
                    <span class="text-gray-800" id="tafssir-mark"></span>
                  </div>

                  <!-- revision -->
                <div class="flex justify-between">
                    <span class="text-gray-600 font-medium"> نقطة المراجعة </span>
                    <span class="text-gray-800" id="revision-mark"></span>
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
                </div>
                <button 
    id="copyButton" 
    class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500">
    Copy Content
  </button>              
              </div>
        </div>
    `
})



document.addEventListener('DOMContentLoaded', () => {
    var disclaimer =  document.querySelector("img[alt='www.000webhost.com']");
     if(disclaimer){
         disclaimer.remove();
     }  
   });
   document.querySelector(".menu-toggle").addEventListener("click", () => {
    const navbar = document.querySelector(".navbar");
    navbar.style.display = navbar.style.display === "flex" ? "none" : "flex";
    document.body.style.overflow = navbar.style.display === "flex" ? "hidden" : "auto";
  });
  function copyCode() {
    var preElements = document.getElementsByTagName('pre');
    var codeText = '';

    for (var i = 0; i < preElements.length; i++) {
        codeText += preElements[i].innerText + '\n\n';
    }

    var textarea = document.createElement('textarea');
    textarea.value = codeText.trim();
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Code copied to clipboard!');
}
function downloadPDF() {
  // Create an anchor element
  var link = document.createElement('a');
  link.setAttribute('download', 'csharp.pdf'); // Set the file name
  
  // Specify the path to the PDF file
  var filePath = 'csharp.pdf'; // Update this with the correct path
  
  // Attach the file path to the anchor
  link.href = filePath;
  
  // Simulate clicking the download link
  link.click();
}
let subjects = JSON.parse(localStorage.getItem('subjects')) || [];

document.addEventListener('DOMContentLoaded', function() {
    displaySubjects();
});

function addSubject() {
    const subject = document.getElementById('subject').value;
    const marks = document.getElementById('marks').value;
    const time = document.getElementById('time').value;

    if (subject && marks && time) {
        subjects.push({ subject, marks: parseInt(marks), time: parseInt(time) });
        localStorage.setItem('subjects', JSON.stringify(subjects));
        displaySubjects();
        alert('Subject added successfully');
    } else {
        alert('Please fill in all fields');
    }
}

function displaySubjects() {
    const subjectList = document.getElementById('subjectList');
    subjectList.innerHTML = '';
    subjects.forEach(sub => {
        const listItem = document.createElement('li');
        listItem.textContent = `Subject: ${sub.subject}, Marks: ${sub.marks}, Time: ${sub.time} hours`;
        subjectList.appendChild(listItem);
    });
}

function resetInputs() {
    document.getElementById('subject').value = '';
    document.getElementById('marks').value = '';
    document.getElementById('time').value = '';
}

function resetSubjects() {
    localStorage.removeItem('subjects');
    subjects = [];
    displaySubjects();
    alert('All subjects have been reset');
}

function goToDashboard() {
    window.location.href = 'dashboard.html';
}

// Dashboard Script
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('dashboard.html')) {
        const subjects = JSON.parse(localStorage.getItem('subjects')) || [];

        const labels = subjects.map(subject => subject.subject);
        const marksData = subjects.map(subject => subject.marks);
        const timeData = subjects.map(subject => subject.time);

        const barChart = new Chart(document.getElementById('barChart').getContext('2d'), {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Marks',
                    data: marksData,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }, {
                    label: 'Time Spent (hours)',
                    data: timeData,
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        const marksPieChart = new Chart(document.getElementById('marksPieChart').getContext('2d'), {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    data: marksData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            }
        });

        const timePieChart = new Chart(document.getElementById('timePieChart').getContext('2d'), {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    data: timeData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            }
        });
    }
});

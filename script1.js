let subjects = JSON.parse(localStorage.getItem('subjects')) || [];

document.addEventListener('DOMContentLoaded', function() {
    displaySubjects();
});

function addSubject() {
    const subject = document.getElementById('subject').value;
    const marks = document.getElementById('marks').value;
    const time = document.getElementById('time').value;
    const homework = document.getElementById('homework').value;
    const participation = document.getElementById('participation').value;
    const extraCredit = document.getElementById('extraCredit').value;

    if(marks>100 || time>25 || homework>8 || participation>8|| extraCredit>5)
    {
        alert("enter correct/inrange value:")
    }

    if (subject && marks && time && homework && participation && extraCredit) {
        subjects.push({ 
            subject, 
            marks: parseInt(marks), 
            time: parseInt(time),  
            homework: parseInt(homework), 
            participation: parseInt(participation), 
            extraCredit: parseInt(extraCredit)
        });
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
        listItem.textContent = `Subject: ${sub.subject}, Marks: ${sub.marks}, Time: ${sub.time} hours, Homework: ${sub.homework}, Participation: ${sub.participation}, Extra Credit: ${sub.extraCredit}`;
        subjectList.appendChild(listItem);
    });
}

function resetInputs() {
    document.getElementById('subject').value = '';
    document.getElementById('marks').value = '';
    document.getElementById('time').value = '';
    document.getElementById('homework').value = '';
    document.getElementById('participation').value = '';
    document.getElementById('extraCredit').value = '';
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

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('dashboard.html')) {
        const subjects = JSON.parse(localStorage.getItem('subjects')) || [];

        const labels = subjects.map(subject => subject.subject);
        const marksData = subjects.map(subject => subject.marks);
        const timeData = subjects.map(subject => subject.time);
        const homeworkData = subjects.map(subject => subject.homework);
        const participationData = subjects.map(subject => subject.participation);
        const extraCreditData = subjects.map(subject => subject.extraCredit);

        // Function to predict marks using a simple linear regression
        function predictMarks(marks, time, homework, participation, extraCredit) {
            // Placeholder for actual regression coefficients
            const coefMarks = 0.6; // this is just a placeholder
            const coefTime = .5; // placeholder
            const coefHomework = 1.25; // placeholder
            const coefParticipation = 1.25; // placeholder
            const coefExtraCredit = 1.5; // placeholder


            return coefMarks * marks + coefTime * time+ coefHomework * homework + coefParticipation * participation + coefExtraCredit * extraCredit;
        }

        const predictedMarksData = subjects.map(subject => Math.min(predictMarks(subject.marks, subject.time, subject.homework, subject.participation, subject.extraCredit), 100));

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

        const homeworkChart = new Chart(document.getElementById('homeworkChart').getContext('2d'), {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Homework Completed',
                    data: homeworkData,
                    backgroundColor: 'rgba(255, 206, 86, 0.2)',
                    borderColor: 'rgba(255, 206, 86, 1)',
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

        const participationChart = new Chart(document.getElementById('participationChart').getContext('2d'), {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Class Participation',
                    data: participationData,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
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

        const extraCreditChart = new Chart(document.getElementById('extraCreditChart').getContext('2d'), {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Extra Credit',
                    data: extraCreditData,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
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

        const predictedMarksChart = new Chart(document.getElementById('predictedMarksChart').getContext('2d'), {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Actual Marks',
                    data: marksData,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }, {
                    label: 'Predicted Marks',
                    data: predictedMarksData,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        suggestedMax: 100  // Ensure y-axis maximum is 100 for predicted marks
                    }
                }
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const subjects = JSON.parse(localStorage.getItem('subjects')) || [];

    const labels = subjects.map(subject => subject.subject);
    const marksData = subjects.map(subject => subject.marks);
    const timeData = subjects.map(subject => subject.time);
    const homeworkData = subjects.map(subject => subject.homework);
    const participationData = subjects.map(subject => subject.participation);
    const extraCreditData = subjects.map(subject => subject.extraCredit);

    // Function to classify marks
    function classifyMarks(marks) {
        if (marks >= 80) {
            return 'Distinction';
        } else if (marks >= 60&&marks<80) {
            return 'Average';
        } else if (marks>=36&&marks<60) {
            return 'Just pass';
        }
        else{
            return 'Fail';
        }
    }

    // Create classification array
    const classifications = marksData.map(mark => classifyMarks(mark));

    // Display subject details including classification
    const subjectDetailsList = document.getElementById('subjectDetailsList');
    subjects.forEach((subject, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h3>${subject.subject}</h3>
            <p>Marks: ${subject.marks}</p>
            <p>Time Spent: ${subject.time} hours</p>
            <p>Homework Completed: ${subject.homework}</p>
            <p>Class Participation: ${subject.participation}</p>
            <p>Extra Credit: ${subject.extraCredit}</p>
            <p>Classification: ${classifications[index]}</p>
        `;
        subjectDetailsList.appendChild(listItem);
    });
});
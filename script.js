document.addEventListener('DOMContentLoaded', function () {
    // Wait for the document to be fully loaded

    // Find the 'See Projects' button
    var seeProjectsButton = document.querySelector('.View-Projects');

    // Find all projects
    var projects = document.querySelectorAll('.projects');
    var projectsHeader = document.querySelectorAll('.project-header');

    // Add a click event listener to the button
    seeProjectsButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior

        // Toggle the 'show' class for all projects
        projects.forEach(function (project) {
            var contacts = document.querySelector('.contacts');
            var skills = document.querySelector('.skills');
            // Check if the button is in a toggled state
            if (contacts.classList.contains('show')) {
                var ContactsButton = document.querySelector('.View-Contacts');
                ContactsButton.click();
            };
            if (skills.classList.contains('show')) {
                var SkillsButton = document.querySelector('.View-Skills');
                SkillsButton.click();
            };
            project.classList.toggle('show');

        });
        projectsHeader.forEach(function (header) {
            header.classList.toggle('show');
        });
    });

    var seeContacts = document.querySelector('.View-Contacts')
    var contacts = document.querySelectorAll('.contacts');

    // Add a click event listener to the button
    seeContacts.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior

        // Toggle the 'show' class for all projects
        contacts.forEach(function (contacts) {
            var projects = document.querySelector('.projects');
            var skills = document.querySelector('.skills');
            // Check if the button is in a toggled state
            if (projects.classList.contains('show')) {
                var ProjectsButton = document.querySelector('.View-Projects');
                ProjectsButton.click();
            };
            if (skills.classList.contains('show')) {
                var SkillsButton = document.querySelector('.View-Skills');
                SkillsButton.click();
            };
            contacts.classList.toggle('show');
        });
    });

    var seeSkills = document.querySelector('.View-Skills')
    var skills = document.querySelectorAll('.skills');

    // Add a click event listener to the button
    seeSkills.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior

        // Toggle the 'show' class for all projects
        skills.forEach(function (skills) {
            var projects = document.querySelector('.projects');
            var contacts = document.querySelector('.contacts');
            // Check if the button is in a toggled state
            if (projects.classList.contains('show')) {
                var ProjectsButton = document.querySelector('.View-Projects');
                ProjectsButton.click();
            };
            if (contacts.classList.contains('show')) {
                var ContactsButton = document.querySelector('.View-Contacts');
                ContactsButton.click();
            };
            skills.classList.toggle('show');
        });
    });


});
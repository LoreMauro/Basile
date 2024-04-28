const zoomToPrincipatoButton = document.querySelector('.zoom-to-principato');

zoomToPrincipatoButton.addEventListener('click', function() {
    const zoomLevel3 = document.querySelector('.zoom-level[data-zoom="3"]');
    if (zoomLevel3) {
        // Set display to block for the zoom level 3
        zoomLevel3.style.display = 'block';
        
        // Hide other zoom levels
        const otherZoomLevels = document.querySelectorAll('.zoom-level:not([data-zoom="3"])');
        otherZoomLevels.forEach(zoomLevel => {
            zoomLevel.style.display = 'none';
        });
    }
});


document.querySelector('.zoom-to-kingdom').addEventListener('click', function() {
    console.log('Zoom to kingdom clicked');

    const currentZoom = document.querySelector('.zoom-level.active'); // Assuming the active zoom level
    const nextZoom = document.querySelector('.zoom-level[data-zoom="2"]'); // Assuming the zoom level 2

    console.log('Current Zoom:', currentZoom);
    console.log('Next Zoom:', nextZoom);

    if (currentZoom && nextZoom) {
        currentZoom.style.display = 'none';
        currentZoom.classList.remove('active'); // Remove active class from current zoom level
        nextZoom.style.display = 'block';
        nextZoom.classList.add('active'); // Add active class to next zoom level
    }
});

document.querySelector('.zoom-to-Basilicata').addEventListener('click', function() {
    const currentZoom = document.querySelector('.zoom-level[data-zoom="2"]');
    const nextZoom = document.querySelector('.zoom-level[data-zoom="4"]');
    if (currentZoom && nextZoom) {
        currentZoom.style.display = 'none';
        nextZoom.style.display = 'block';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.querySelectorAll('.zoom-to-map2');
    backButton.forEach(button => {
        button.addEventListener('click', function() {
            const map2 = document.querySelector('.zoom-level[data-zoom="2"]');
            if (map2) {
                map2.style.display = 'block';
                button.closest('.zoom-level').style.display = 'none';
            }
        });
    });

    // Event listener for the kingdom button
    const kingdomButton = document.querySelector('.zoom-to-kingdom');
    kingdomButton.addEventListener('click', function () {
        // Your code to handle the click event for the kingdom button goes here
        console.log('Kingdom button clicked');
        // Add your functionality here
    });
});

document.querySelector('.zoom-to-Terra').addEventListener('click', function() {
    const currentZoom = document.querySelector('.zoom-level[data-zoom="2"]');
    const nextZoom = document.querySelector('.zoom-level[data-zoom="5"]');
    if (currentZoom && nextZoom) {
        currentZoom.style.display = 'none';
        nextZoom.style.display = 'block';
    }
});

document.querySelector('.zoom-to-naples').addEventListener('click', function() {
    const currentZoom = document.querySelector('.zoom-level.active');
    const naplesZoom = document.querySelector('.zoom-level[data-zoom="6"]'); // Assuming Naples is at zoom level 6
    if (currentZoom && naplesZoom) {
        currentZoom.classList.remove('active');
        naplesZoom.classList.add('active');
    }
});
document.querySelector('.zoom-to-naples').addEventListener('click', function() {
    // Hide current map
    document.querySelector('.zoom-level[data-zoom="5"]').style.display = 'none';
    
    // Show Naples map
    document.querySelector('.zoom-level[data-zoom="6"]').style.display = 'block';
});

document.querySelector('.zoom-to-terra-di-lavoro').addEventListener('click', function() {
    // Hide current map (Naples map)
    document.querySelector('.zoom-level[data-zoom="6"]').style.display = 'none';
    
    // Show Terra di Lavoro map
    document.querySelector('.zoom-level[data-zoom="5"]').style.display = 'block';
});

document.querySelector('.zoom-to-map1').addEventListener('click', function() {
    const currentZoom = document.querySelector('.zoom-level[data-zoom="2"]');
    const nextZoom = document.querySelector('.zoom-level[data-zoom="1"]');
    if (currentZoom && nextZoom) {
        currentZoom.style.display = 'none';
        nextZoom.style.display = 'block';
    }
});

const labels = document.querySelectorAll('.label-5');

document.addEventListener('DOMContentLoaded', function () {
    const labels = document.querySelectorAll('.label-5'); // Select all labels

    // Iterate over each label and attach event listeners
    labels.forEach(label => {
        label.addEventListener('mouseenter', function () {
            const articleUrl = label.parentElement.getAttribute('href'); // Get the article URL from the parent element's href attribute
            fetchArticle(articleUrl); // Fetch and display the article preview
        });

        label.addEventListener('mouseleave', function () {
            hideArticlePreview(); // Hide the article preview when mouse leaves the label
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.container');

    containers.forEach(container => {
        const bgImage = container.dataset.bgImage;
        container.style.backgroundImage = `url(${bgImage})`;
    });
});
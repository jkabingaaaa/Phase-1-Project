const sampleEvents = [
    {
        name: "Sarartoga Tech Conference",
        date: "2025-05-15T09:00",
        venue: "Convention Center",
        type: "conference",
        description: "A day set out for tech talks, workshops, and networking with industry leaders.",
        poster: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        name: "Sunset and Sjiga",
        date: "2025-04-19T18:00",
        venue: "Sky Longue, Emara Ole Sereni",
        type: "concert",
        description: "The ultimate nighttime party experience.",
        poster: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        name: "Kuza Craft Fair",
        date: "2025-04-25T10:00",
        venue: "Waterfront, Karen",
        type: "exhibition",
        description:"Shifting Perspectives!",
        poster: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
];
  const eventsList = document.getElementById('events-list');
  const eventForm = document.getElementById('event-form');
  const posterUpload = document.getElementById('poster-upload');
  const fileInput = document.getElementById('event-poster');
  const fileName = document.getElementById('file-name');
  const successModal = document.getElementById('success-modal');
  const closeBtn = document.querySelector('.close-btn');
  
  document.addEventListener('DOMContentLoaded', () => {
      displayEvents(sampleEvents);
  });
  function displayEvents(events) {
      eventsList.innerHTML = '';
      
      events.forEach(event => {
          const eventDate = new Date(event.date);
          const options = { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
          };
          const formattedDate = eventDate.toLocaleDateString('en-US', options);
                
          const eventCard = document.createElement('div');
          eventCard.className = 'event-card';
          eventCard.innerHTML = `
              <img src="${event.poster}" alt="${event.name}" class="event-poster">
              <div class="event-details">
                  <h3 class="event-name">${event.name}</h3>
                  <div class="event-meta">
                      <span><i class="far fa-calendar-alt"></i> ${formattedDate}</span>
                      <span><i class="fas fa-map-marker-alt"></i> ${event.venue}</span>
                  </div>
                  <span class="event-type">${event.type.charAt(0).toUpperCase() + event.type.slice(1)}</span>
                  <p class="event-description">${event.description}</p>
                  <a href="#" class="btn">Learn More</a>
              </div>
          `;
          
          eventsList.appendChild(eventCard);
      });
  }
   posterUpload.addEventListener('click', () => {
    fileInput.click();
});
fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
        fileName.textContent = fileInput.files[0].name;
        posterUpload.style.borderColor = 'black';
        posterUpload.style.backgroundColor = 'white';
    }
});
eventForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;
    const eventVenue = document.getElementById('event-venue').value;
    const eventType = document.getElementById('event-type').value;
    const eventDescription = document.getElementById('event-description').value;
    const eventPoster = fileInput.files[0];
     let posterUrl = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
            
     if (eventPoster) {
         posterUrl = URL.createObjectURL(eventPoster);
     }
     
     const newEvent = {
         name: eventName,
         date: eventDate,
         venue: eventVenue,
         type: eventType,
         description: eventDescription,
         poster: posterUrl
     };

     sampleEvents.unshift(newEvent);
     
     displayEvents(sampleEvents);
     
     successModal.style.display = 'block';
       eventForm.reset();
       fileName.textContent = '';
       posterUpload.style.borderColor = 'black';
       posterUpload.style.backgroundColor = 'transparent';
   });
   closeBtn.addEventListener('click', () => {
       successModal.style.display = 'none';
   });
   window.addEventListener('click', (e) => {
       if (e.target === successModal) {
           successModal.style.display = 'none';
       }
   });
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
        
        
        });
    });
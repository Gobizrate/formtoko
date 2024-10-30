const photoInput = document.getElementById('photo');
const fileNameSpan = document.getElementById('fileName');
const stars = document.querySelectorAll('.star');
const categorySelect = document.getElementById('category');
const otherNote = document.getElementById('otherNote');

let selectedRating = 0;

stars.forEach(star => {
  star.addEventListener('click', () => {
    selectedRating = star.getAttribute('data-value');
    highlightStars(selectedRating);
  });
});

function highlightStars(rating) {
  stars.forEach(star => {
    const starValue = star.getAttribute('data-value');
    if (starValue <= rating) {
      star.classList.add('selected');
      star.classList.remove('text-gray-300');
      star.classList.add('text-yellow-400');
    } else {
      star.classList.remove('selected');
      star.classList.add('text-gray-300');
      star.classList.remove('text-yellow-400');
    }
  });
}

categorySelect.addEventListener('change', () => {
  if (categorySelect.value === 'Others') {
    otherNote.classList.remove('hidden');
  } else {
    otherNote.classList.add('hidden');
  }
});

photoInput.addEventListener('change', () => {
  fileNameSpan.textContent = photoInput.files.length > 0 ? photoInput.files[0].name : 'No file chosen';
});

function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const category = document.getElementById('category').value;
  const comment = document.getElementById('comment').value.trim();
  const otherNoteText = document.getElementById('otherNoteText').value.trim();

  if (!name || !email || !category || !comment || selectedRating === 0 || 
      (category === 'Others' && !otherNoteText)) {
    alert("Please fill out all fields before submitting.");
  } else {
    alert("Thank you for your feedback!");
  }
}

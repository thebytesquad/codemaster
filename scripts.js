document.addEventListener('DOMContentLoaded', () => {
  const skills = document.querySelectorAll('.skill');

  skills.forEach(skill => {
    skill.addEventListener('mouseover', () => {
            skill.style.transform = 'scale(1.1)';
    });

    skill.addEventListener('mouseout', () => {
      skill.style.transform = 'scale(1)';
    });
  });
});

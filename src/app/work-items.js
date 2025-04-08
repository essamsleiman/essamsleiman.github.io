"use client";

export function setupWorkItems() {
  if (typeof window !== 'undefined') {
    const workHeaders = document.querySelectorAll('.work-header');
    
    workHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const workItem = header.closest('.work-item');
        const details = workItem.querySelector('.work-details');
        const chevron = header.querySelector('.chevron svg');
        
        // Toggle visibility
        if (details.style.display === 'none' || !details.style.display) {
          details.style.display = 'block';
          chevron.style.transform = 'rotate(180deg)';
        } else {
          details.style.display = 'none';
          chevron.style.transform = 'rotate(0)';
        }
      });
    });
    
    // Initially hide all details
    document.querySelectorAll('.work-details').forEach(details => {
      details.style.display = 'none';
    });
  }
}

const jobs = [
    {
      title: "Shift Incharge (Power Plant)",
      image: "./img-career/project-manager.svg",
      details:
        "Experience: 4 - 5 years.",
      openPositions: "1",
      link: "mailto:swaroop.nayak@bioagroenergy.in",
    },
  
    {
      title: "DCS Engg (Power Plant)",
      image: "./img-career/project-manager.svg",
      details:
        "Experience: 3-4 years.",
      openPositions: "1",
      link: "mailto:swaroop.nayak@bioagroenergy.in",
    },
  
    {
      title: "1st Class Boiler Operator",
      image: "./img-career/project-manager.svg",
      details:
        "Experience: 4-5 years.",
      openPositions: "1",
      link: "mailto:swaroop.nayak@bioagroenergy.in",
    },
  
    {
      title: "2nd Class Boiler Operator",
      image: "./img-career/project-manager.svg",
      details:
        "Experience: 4-5 years",
      openPositions: "1",
      link: "mailto:swaroop.nayak@bioagroenergy.in",
    },
  
    {
      title: "Sr. Engg (Mechanical)",
      image: "./img-career/project-manager.svg",
      details:
        "Experience: 4-5 years",
      openPositions: "1",
      link: "mailto:swaroop.nayak@bioagroenergy.in",
    },
  
    {
      title: "Shift Engg (Mechinical)",
      image: "./img-career/project-manager.svg",
      details:
        "Experience: 4-5 years.",
      openPositions: "1",
      link: "mailto:swaroop.nayak@bioagroenergy.in",
    },
    {
      title: "Electrical & Instrumental Incharge",
      image: "./img-career/project-manager.svg",
      details:
        "Experience: 4-5 years.",
      openPositions: "1",
      link: "mailto:swaroop.nayak@bioagroenergy.in",
    },
    {
      title: "Electrical Incharge",
      image: "./img-career/project-manager.svg",
      details:
        "Experience: 3-4 years.",
      openPositions: "1",
      link: "mailto:swaroop.nayak@bioagroenergy.in",
    },
  ];
  
  const jobsHeading = document.querySelector(".jobs-list-container h2");
  const jobsContainer = document.querySelector(".jobs-list-container .jobs");
  const jobSearch = document.querySelector(".jobs-list-container .job-search");
  
  let searchTerm = "";
  
  if (jobs.length == 1) {
    jobsHeading.innerHTML = `${jobs.length} Job`;
  } else {
    jobsHeading.innerHTML = `${jobs.length} Jobs`;
  }
  
  const createJobListingCards = () => {
    jobsContainer.innerHTML = "";
  
    jobs.forEach((job) => {
      if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        let jobCard = document.createElement("div");
        jobCard.classList.add("job");
  
        let image = document.createElement("img");
        image.src = job.image;
  
        let title = document.createElement("h3");
        title.innerHTML = job.title;
        title.classList.add("job-title");
  
        let details = document.createElement("div");
        details.innerHTML = job.details;
        details.classList.add("details");
  
        let detailsBtn = document.createElement("a");
        detailsBtn.href = job.link;
        detailsBtn.innerHTML = "Send Resume";
        detailsBtn.classList.add("details-btn");
  
        let openPositions = document.createElement("span");
        openPositions.classList.add("open-positions");
  
        if (job.openPositions == 1) {
          openPositions.innerHTML = `${job.openPositions} open position`;
        } else {
          openPositions.innerHTML = `${job.openPositions} open positions`;
        }
  
        jobCard.appendChild(image);
        jobCard.appendChild(title);
        jobCard.appendChild(details);
        jobCard.appendChild(detailsBtn);
        jobCard.appendChild(openPositions);
  
        jobsContainer.appendChild(jobCard);
      }
    });
  };
  
  createJobListingCards();
  
  jobSearch.addEventListener("input", (e) => {
    searchTerm = e.target.value;
  
    createJobListingCards();
  });
  
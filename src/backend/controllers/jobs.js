const listOfJob = [
  {
    id: '1',
    title: 'Senior backend developer',
    company: 'Google.inc',
    location: 'Addison',
    jobType: 'Full-time',
    date: '20, Sept 2020',
  },
  {
    id: '2',
    title: 'Senior backend developer',
    company: 'Google.inc',
    location: 'Berkeley County',
    jobType: 'Full-time',
    date: '20, Sept 2020',
  },
  {
    id: '3',
    title: 'Senior backend developer',
    company: 'Google.inc',
    location: 'Cambridge',
    jobType: 'Full-time',
    date: '20, Sept 2020',
  },
  {
    id: '4',
    title: 'Senior backend developer',
    company: 'Google.inc',
    location: 'Chandler',
    jobType: 'Full-time',
    date: '20, Sept 2020',
  },
  {
    id: '5',
    title: 'Senior backend developer',
    company: 'Google.inc',
    location: 'Clarksville',
    jobType: 'Full-time',
    date: '20, Sept 2020',
  },
  {
    id: '6',
    title: 'Senior backend developer',
    company: 'Google.inc',
    location: 'Detroit',
    jobType: 'Full-time',
    date: '20, Sept 2020',
  },
  {
    id: '7',
    title: 'Senior backend developer',
    company: 'Google.inc',
    location: 'Dallas',
    jobType: 'Full-time',
    date: '20, Sept 2020',
  },
  {
    id: '8',
    title: 'Senior backend developer',
    company: 'Facebook',
    location: 'Salt Lake City',
    jobType: 'Full-time',
    date: '20, Sept 2020',
  },
  {
    id: '9',
    title: 'Senior backend developer',
    company: 'Netflix',
    location: 'Sunnyvale',
    jobType: 'Full-time',
    date: '20, Sept 2020',
  },
  {
    id: '10',
    title: 'Senior backend developer',
    company: 'Amazon',
    location: 'Washington D.C.',
    jobType: 'Full-time',
    date: '20, Sept 2020',
  },
];

module.exports.listJobs = async (req, res) => {
  return res.json(listOfJob);
};

module.exports.getJobById = async (req, res) => {
  const { jobId } = req.params;
  if (!jobId) {
    return res.status(400).json({
      error: 'Job id parameter required',
    });
  }
  const job = listOfJob.find((job) => job.id === jobId);
  if (!job) {
    return res.status(404).json({
      error: 'Job not found',
    });
  }
  return res.status(200).json(job);
};

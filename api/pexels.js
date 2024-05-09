import axios from 'axios';

export const getImages = async (searchTerm = "technology") =>
  await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}`, {
    headers: {
      Authorization: 'XqXBFRdxCy0KuyEbM2FUekp12fiDPVcCAVWuLD3N4zNS1GWbMNAMYbFH',
    },
  });

// XqXBFRdxCy0KuyEbM2FUekp12fiDPVcCAVWuLD3N4zNS1GWbMNAMYbFH
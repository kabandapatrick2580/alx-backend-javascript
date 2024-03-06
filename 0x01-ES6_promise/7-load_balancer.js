/**
 * Load balancer function that resolves with the value of the first resolved promise.
 *
 * @param {Promise} chinaDownload - Promise for China download.
 * @param {Promise} USDownload - Promise for US download.
 * @returns {Promise} A promise that resolves with the value of the first resolved promise.
 */
export default function loadBalancer(chinaDownload, USDownload) {
    return Promise.race([chinaDownload, USDownload]);
  }

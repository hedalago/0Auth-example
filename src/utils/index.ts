export default {
  formatDate(dateString: string): string {
    const date = new Date(dateString).toDateString();
    const split = date.split(' ');
    const day = parseInt(split[2], 10);
    const month = split[1];
    const year = split[3];
    return `${month}, ${day}, ${year}`;
  },
};

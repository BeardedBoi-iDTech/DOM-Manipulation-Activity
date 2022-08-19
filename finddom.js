function getWidth(id)
{
  const areaWidth = document.getElementById(id).clientWidth;
  return areaWidth + ' px';
}

window.onload = () => 
{
  document.getElementById('areaWidth').innerHTML = getWidth('mainDiv');
};

//don't change this line
if (typeof module !== 'undefined') 
{
  module.exports = getWidth;
}
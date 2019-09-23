/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(focus, knowsProgramming, config) {   
  // if "knowsProgramming" = "true", that is mean 800 hours to study
  // if "knowsProgramming" = "false", that is mean (800+500) hours to study
  // by "focus" (Key) we find in "config" (Object) necessary hours (value) per week for stydy
  // finally calculate number of weeks and round up
  return knowsProgramming >= true ? Math.ceil(800/config[focus]) : Math.ceil(1300/config[focus]);
}
  
import { Injectable } from '@angular/core';

@Injectable()
export class TimetableService {

  constructor() { }

     // Lectures table
   lectureArray(){
    return [
        { day: 'Saturday', one: 'arabic', two: 'bio', three: 'science', four: 'math', five: 'history', six: 'bio' },
        { day: 'Sunday', one: 'english', two: 'science', three: 'history', four: 'science', five: 'math', six: 'history' },
        { day: 'Monday', one: 'math', two: 'history', three: 'math', four: 'history', five: 'bio', six: 'math' },
        { day: 'Tuesday', one: 'history', two: 'math', three: 'english', four: 'arabic', five: 'arabic', six: 'english' },
        { day: 'Wednesday', one: 'science', two: 'english', three: 'arabic', four: 'bio', five: 'science', six: 'arabic' },
        { day: 'Thursday ', one: 'bio', two: 'arabic', three: 'bio', four: 'english', five: 'english', six: 'science' },
    ];
  }
   classesArray(){
  return [1, 2, 3, 4, 5, 6];
  }
  classesTimeArray(){
    return [
        { one: '08:00', two: '09:30', three: '11:00', four: '12:30', five: '02:00', six: '03:30' }
    ];
   }
    // end lectures table


    // Start  midterm table
   midtermArray(){
    return [
        { day: 'Saturday' , exam: 'arabic' , date: '31/03/2018'},
        { day: 'Sunday' , exam: 'english' , date: '01/04/2018'},
        { day: 'Monday' , exam: 'math' , date: '02/04/2018'},
        { day: 'Tuesday' , exam: 'history' , date: '03/04/2018'},
        { day: 'Wednesday' , exam: 'science' , date: '04/04/2018'},
        { day: 'Thursday' , exam: 'bio' , date: '05/04/2018'},
    ];
   }
   midTime(){
    return '10:00 - 11:00';
   }

    // end  midterm table


    // Start  final table
    finalArray(){
        return [
            { day: 'Saturday' , exam: 'arabic' , date: '03/06/2018'},
            { day: 'Wednesday' , exam: 'bio' , date: '05/06/2018'},
            { day: 'Monday' , exam: 'math' , date: '10/06/2018'},
            { day: 'Thursday' , exam: 'history' , date: '15/06/2018'},
            { day: 'Monday' , exam: 'science' , date: '17/06/2018'},
            { day: 'Thursday' , exam: 'english' , date: '22/06/2018'},
        ];
    }
    finalTime(){
      return '10-00 - 01:00';
    }

    // end final table
}

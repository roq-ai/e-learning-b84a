import { PracticeTestResultInterface } from 'interfaces/practice-test-result';
import { QuestionInterface } from 'interfaces/question';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CourseInterface {
  id?: string;
  name: string;
  description?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  practice_test_result?: PracticeTestResultInterface[];
  question?: QuestionInterface[];
  user?: UserInterface;
  _count?: {
    practice_test_result?: number;
    question?: number;
  };
}

export interface CourseGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  user_id?: string;
}

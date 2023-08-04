const mapping: Record<string, string> = {
  courses: 'course',
  organizations: 'organization',
  'practice-test-results': 'practice_test_result',
  questions: 'question',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

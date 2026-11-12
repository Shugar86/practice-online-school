// Вымышленные данные для локальной практики. Время просмотра — в секундах.
window.schoolDemo = {
  course: { id: 'web-start', title: 'Первые шаги в вебе' },
  lessons: [
    { id: 'structure', title: 'Структура страницы', video: 'media/lesson.mp4' },
    { id: 'navigation', title: 'Навигация', video: 'media/lesson.mp4' }
  ],
  students: [
    { id: 'student-a', name: 'Аня', access: 'active' },
    { id: 'student-b', name: 'Борис', access: 'active' },
    { id: 'student-c', name: 'Варя', access: 'none' },
    { id: 'student-d', name: 'Глеб', access: 'expired' }
  ],
  progress: [
    { studentId: 'student-b', lessonId: 'structure', positionSeconds: 12 }
  ]
}

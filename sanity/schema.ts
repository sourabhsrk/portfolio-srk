import { type SchemaTypeDefinition } from 'sanity'

import project from './schemas/project'
import experience from './schemas/experience'
import pageInfo from './schemas/pageInfo'
import skills from './schemas/skills'
import social from './schemas/social'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, skills, experience, project,social],
}

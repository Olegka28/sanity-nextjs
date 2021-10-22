export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '617286f295ef1ff54a7ecbb8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-studio-yj7d8ymh',
                  apiId: '274e74e3-ef5e-4cda-b44e-69861e715633'
                },
                {
                  buildHookId: '617286f2d9167de114298ffa',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-web-ngsirqhh',
                  apiId: '0cde7bb5-80c7-47d3-ab37-43bf28f28035'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Olegka28/sanity-nextjs',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-web-ngsirqhh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

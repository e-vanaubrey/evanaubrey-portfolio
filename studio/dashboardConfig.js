export default {
  widgets: [
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
                  buildHookId: '6027136dd15e45008f5c514c',
                  title: 'Sanity Studio',
                  name: 'evanaubrey-portfolio-studio',
                  apiId: 'a6df5213-5630-4fa4-8d0c-c923b04ab9d6'
                },
                {
                  buildHookId: '6027136d4e84c7010680384b',
                  title: 'Portfolio Website',
                  name: 'evanaubrey-portfolio',
                  apiId: 'bf800895-0377-4439-8d33-03fd18a1ee74'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/e-vanaubrey/evanaubrey-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://evanaubrey-portfolio.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

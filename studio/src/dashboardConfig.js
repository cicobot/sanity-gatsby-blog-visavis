export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fc0e7de613244c45ff961c3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-visavis-studio',
                  apiId: '83d97e46-850a-46f2-a40f-f01a68d18b4b'
                },
                {
                  buildHookId: '5fc0e7deb9a5145dc7c6305d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-visavis',
                  apiId: '57c50fc2-7f33-42d2-a761-d55bb5dad519'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cicobot/sanity-gatsby-blog-visavis',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-visavis.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

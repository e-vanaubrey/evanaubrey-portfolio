import {format} from 'date-fns'

const VideoPreview = ({value}) => (
  <video src={value.url} autoplay playsinline loop></video>
);


export default {
  name: 'nft',
  title: 'NFT',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the project',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      description: 'You can use this field to schedule projects where you show them',
      type: 'datetime'
    },
    {
      name: 'url',
      title: 'Source URL',
      type: 'url',
      description: 'Open Sea media link',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'figure'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'projectPortableText'
    },
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage',
      url: 'url'
    },
    component: VideoPreview,
    prepare({title = 'No title', publishedAt, slug = {}, media}) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
}

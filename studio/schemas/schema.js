import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import Break from './Break'
import PortableText from './PortableText'
import Songs from './Songs'
import Artists from './Artists'
import Playlists from './Playlists'
import Labels from './Labels'
import News from './News'
import Tags from './Tags'
import PlaylistGroup from './PlaylistGroup'
import ArtistGroup from './ArtistGroup'
import HeroImages from './HeroImages'
import ChartBoard from './ChartBoard'
import Casts from './Casts'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    Break,
    PortableText,
    Songs,
    Artists,
    Playlists,
    Labels,
    News,
    Tags,
    PlaylistGroup,
    ArtistGroup,
    HeroImages,
    ChartBoard,
    Casts
  ])
})

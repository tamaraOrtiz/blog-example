import React, {useMemo} from 'react'
import {useParams} from "react-router-dom";

import RemoteArticleList from "~/components/articles/RemoteArticleList";
import LocalArticleList from "~/components/articles/LocalArticleList";
import { useCurrentUser } from '~/hooks/sessions'
import Header from "./Header";

const HomePage = () => {
  const { postType } = useParams();
  const isRemote = useMemo(() => postType === 'remote', [
    postType,
  ])
  const { data: currentUser } = useCurrentUser()

  return (
    <>
      <Header isRemote={isRemote}/>
      <main className="container">
        {isRemote && (<RemoteArticleList/>)}
        {!isRemote && (<LocalArticleList currentUser={currentUser}/>)}
      </main>
    </>)
}
export default HomePage
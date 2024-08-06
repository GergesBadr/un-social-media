import {
  resourcesRowOne,
  resourcesRowThree,
  resourcesRowTwo,
} from "../../utils/constants";
import InfiniteScroll from "./InfiniteScroll";
import ResourcesItem from "./ResourcesItem";

function ResourcesList() {
  return (
    <>
      <InfiniteScroll>
        {resourcesRowOne.map((resource) => {
          return <ResourcesItem key={resource.id} resource={resource} />;
        })}
      </InfiniteScroll>

      <InfiniteScroll scrollDirection="to-right">
        {resourcesRowTwo.map((resource) => {
          return <ResourcesItem key={resource.id} resource={resource} />;
        })}
      </InfiniteScroll>

      <InfiniteScroll>
        {resourcesRowThree.map((resource) => {
          return <ResourcesItem key={resource.id} resource={resource} />;
        })}
      </InfiniteScroll>
    </>
  );
}

export default ResourcesList;

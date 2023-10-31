import { createClient, groq } from "next-sanity";

export async function getCategory() {
  const client = createClient({
    projectId: "q6lrshxy",
    dataset: "production",
    apiVersion: "2023-09-18",
  });

  return client.fetch(
    groq`*[_type=="category"]{
      _id,
      _createdAt,
      category
  }`
  );
}

export async function getProjects() {
  const client = createClient({
    projectId: "q6lrshxy",
    dataset: "production",
    apiVersion: "2023-09-18",
  });

  return client.fetch(
    groq`*[_type=="project"]{
      _id,
      _createdAt,
      name,
      category,
      "slug": slug.current,
      "image": image.asset->url,
      "secondImage": secondImage.asset->url,
      "thirdImage": thirdImage.asset->url
  }`
  );
}

export async function getProject(slug) {
  const client = createClient({
    projectId: "q6lrshxy",
    dataset: "production",
    apiVersion: "2023-09-18",
  });

  return client.fetch(
    groq`*[_type=="project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      category,
      "slug": slug.current,
      "image": image.asset->url,
      "secondImage": secondImage.asset->url,
      "thirdImage": thirdImage.asset->url
  }`,
  {slug}
  );
}

# transform

A pipeline to transform data using pachyderm

## Instructions

* Get pachyderm running http://pachyderm.readthedocs.io/en/latest/getting_started/local_installation.html

* Create a repo `pachctl create-repo fixtures`

* Put some files in `pachctl put-file fixtures master test2.json -c -f ./test_files/test2.json`

* Build the docker image `docker build . augier/transformer`

* Push the docker iamge `docker push augier/transformer`

* Create the pipeline `pachctl create-pipeline -f trasnformer.json`

* Check the status of the jobs `pachctl list-job`

* Check the existence of output files `pachctl list-file transformer master`

* Read a file `pachctl get-file transformer  master new_test2.json`

## Intesting points

If you add new files with `put-file` it will be automatically processed.

If you update your pipeline any existing files that have already been processed won't be rerun unless you pass the --reprocess flag `pachctl update-pipeline -f transformer.json --reprocess`
